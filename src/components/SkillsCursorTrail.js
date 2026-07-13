import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

let idCounter = 0;
const TRAIL_LIFETIME_MS = 700;
const MIN_SPAWN_DISTANCE = 16;
const MIN_SPAWN_INTERVAL_MS = 35;

// A small trail of orange "blocks" that follow the cursor/touch, scoped to
// whatever section `containerRef` points at (listens on window so it still
// works over child elements like the skill pills, but only spawns while the
// pointer is actually within that section's bounds).
const SkillsCursorTrail = ({ containerRef }) => {
  const [points, setPoints] = useState([]);
  const lastSpawn = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawnFromEvent = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        return;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const now = performance.now();
      const dist = Math.hypot(x - lastSpawn.current.x, y - lastSpawn.current.y);
      if (dist < MIN_SPAWN_DISTANCE && now - lastSpawn.current.time < MIN_SPAWN_INTERVAL_MS) {
        return;
      }
      lastSpawn.current = { x, y, time: now };

      const id = idCounter++;
      const size = 7 + Math.random() * 12;
      const rotate = Math.random() * 70 - 35;
      const drift = Math.random() * 16 - 8;

      setPoints((prev) => [...prev.slice(-28), { id, x, y, size, rotate, drift }]);
      window.setTimeout(() => {
        setPoints((prev) => prev.filter((p) => p.id !== id));
      }, TRAIL_LIFETIME_MS);
    };

    const onPointerMove = (e) => spawnFromEvent(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      spawnFromEvent(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [containerRef]);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {points.map(({ id, x, y, size, rotate, drift }) => (
          <motion.span
            key={id}
            className="absolute rounded-sm bg-primary"
            style={{
              left: x - size / 2,
              top: y - size / 2,
              width: size,
              height: size,
              boxShadow: "0 0 10px rgba(235,94,40,0.6)",
            }}
            initial={{ opacity: 0.9, scale: 1, rotate, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 0.15, x: drift, y: drift * 1.5 + 12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: TRAIL_LIFETIME_MS / 1000, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SkillsCursorTrail;
