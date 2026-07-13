import React, { useEffect, useRef } from "react";
import { Renderer, Triangle, Program, Mesh } from "ogl";

// Mobile has no cursor: either follow a touch-drag ("touch"), or drive the
// same shader uniforms with a slow ambient path so the effect is visible
// without requiring interaction ("drift"). Toggle here, or override per-load
// with ?heroMobileMode=touch|drift for side-by-side comparison.
const MOBILE_MODE = "drift"; // "drift" | "touch"

const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// A transparent canvas: fully invisible everywhere except a small radius
// around the cursor, where a translucent gray/glitch speckle is composited
// on top via real alpha blending. The opacity itself (not just the color)
// carries the "how visible" falloff, so it reads consistently over a flat
// background or a busy image alike — tying opacity to the same low-max
// per-block random value as the color (an earlier version of this) made it
// read as invisible over near-white areas and only noticeable over images.
const fragment = /* glsl */ `
  precision highp float;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uIntensity;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 pixelCoord = vUv * uResolution;
    vec2 mousePx = uMouse * uResolution;
    vec2 dpx = pixelCoord - mousePx;
    float dist = length(dpx);

    // Block size driven by overall engagement only (not local distance) so
    // the quantization grid stays uniform — varying it by radius produces
    // concentric ring artifacts.
    float blockSize = mix(2.0, 18.0, uIntensity);
    float shiftPx = uIntensity * 3.0;

    vec2 dir = dist > 0.0001 ? normalize(dpx) : vec2(0.0);
    vec2 blockG = floor(pixelCoord / blockSize);
    vec2 blockR = floor((pixelCoord + dir * shiftPx) / blockSize);
    vec2 blockB = floor((pixelCoord - dir * shiftPx) / blockSize);

    float gN = hash(blockG);
    float rN = hash(blockR);
    float bN = hash(blockB);

    // Small, tight radius so the effect reads as "wherever the cursor is",
    // not a wash over the whole viewport.
    float visible = clamp(smoothstep(140.0, 0.0, dist) * uIntensity, 0.0, 1.0);

    vec3 speckle = vec3(1.0) - vec3(rN, gN, bN) * 0.55;
    float alpha = visible * 0.55;

    gl_FragColor = vec4(speckle, alpha);
  }
`;

const CursorGlitchEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const params = new URLSearchParams(window.location.search);
    const mobileMode = params.get("heroMobileMode") || MOBILE_MODE;
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    const renderer = new Renderer({
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
      dpr: isMobile ? Math.min(window.devicePixelRatio, 1) : Math.min(window.devicePixelRatio, 2),
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.display = "block";
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uResolution: { value: [1, 1] },
        uMouse: { value: [0.5, 0.5] },
        uIntensity: { value: 0 },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };
    resize();
    window.addEventListener("resize", resize);

    let target = { x: 0.5, y: 0.5 };
    let intensityTarget = 0;
    let intensity = 0;

    const setPointerFromEvent = (clientX, clientY) => {
      target = {
        x: clientX / window.innerWidth,
        y: 1 - clientY / window.innerHeight,
      };
    };

    const onPointerMove = (e) => {
      setPointerFromEvent(e.clientX, e.clientY);
      intensityTarget = 1;
    };
    const onTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      setPointerFromEvent(touch.clientX, touch.clientY);
      intensityTarget = 1;
    };
    const onTouchEnd = () => {
      intensityTarget = 0;
    };
    // mouseleave/pointerleave on window/document don't fire reliably across
    // browsers; a mouseout with no relatedTarget means the pointer actually
    // left the viewport (as opposed to just being still for a moment).
    const onDocumentMouseOut = (e) => {
      if (!e.relatedTarget) intensityTarget = 0;
    };

    const useTouchDrag = isMobile && mobileMode === "touch";
    const useDrift = isMobile && mobileMode !== "touch";

    if (!isMobile) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("mouseout", onDocumentMouseOut, { passive: true });
    } else if (useTouchDrag) {
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
    }

    let visible = document.visibilityState !== "hidden";
    const onVisibilityChange = () => {
      visible = document.visibilityState !== "hidden";
      if (visible) start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    let rafId = null;
    let running = false;

    const frame = (time) => {
      if (!visible) {
        running = false;
        return;
      }

      if (useDrift) {
        const t = time * 0.0003;
        target = {
          x: 0.5 + 0.35 * Math.sin(t * 1.3),
          y: 0.5 + 0.3 * Math.sin(t * 0.9 + 1.4),
        };
        intensityTarget = 0.5;
      }

      intensity += (intensityTarget - intensity) * 0.06;

      program.uniforms.uMouse.value = [target.x, target.y];
      program.uniforms.uIntensity.value = intensity;

      renderer.render({ scene: mesh });
      rafId = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    };
    start();

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseout", onDocumentMouseOut);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CursorGlitchEffect;
