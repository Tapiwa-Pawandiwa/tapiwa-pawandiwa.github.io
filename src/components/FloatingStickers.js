import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import computerSticker from "../../public/images/stickers/Computer.png";
import starSticker from "../../public/images/stickers/Star.png";
import smileySticker from "../../public/images/stickers/smiley.png";
import butterflySticker from "../../public/images/stickers/butterfly.png";
import rocketSticker from "../../public/images/stickers/rocket_sticker.png";

const FALL_START_DELAY = 0.3;
const FALL_DURATION = 1.5;

// This project's Tailwind breakpoints are max-width based (sm/md/lg apply at
// and below their size, not above), so a `hidden` at any one of them also
// hides at every smaller size below it — there's no plain way to "hide only
// on mid-size screens but show again on phones". So instead of hiding
// stickers on mobile, every one stays visible and just shrinks with the
// viewport; positions are also nudged per breakpoint where they'd otherwise
// collide with the nav bar or the HireMe button (which itself relocates
// from bottom-left on desktop to top-right on mobile).
const stickers = [
  {
    src: computerSticker,
    alt: "Retro computer sticker",
    className: "top-[16%] left-[9%] w-[188px] lg:w-[146px] md:w-[104px] sm:w-[83px] xs:w-[73px]",
    rotate: -10,
    fallRotate: -220,
    fallX: -60,
    floatDuration: 3.2,
  },
  {
    src: starSticker,
    alt: "Star sticker",
    className:
      "top-[18%] right-[17%] w-[146px] lg:w-[125px] md:right-auto md:left-[26%] md:top-[8%] md:w-[83px] sm:w-[73px] xs:w-[62px]",
    rotate: 14,
    fallRotate: 260,
    fallX: 50,
    floatDuration: 3.8,
  },
  {
    src: smileySticker,
    alt: "Smiley face sticker",
    className: "top-[46%] left-[7%] w-[166px] lg:w-[125px] md:top-[30%] md:w-[94px] sm:w-[73px] xs:w-[62px]",
    rotate: -8,
    fallRotate: -180,
    fallX: -40,
    floatDuration: 4.2,
  },
  {
    src: butterflySticker,
    alt: "Butterfly sticker",
    className: "top-[58%] right-[11%] w-[166px] lg:w-[125px] md:w-[94px] sm:w-[73px] xs:w-[62px]",
    rotate: 12,
    fallRotate: 200,
    fallX: 40,
    floatDuration: 3.5,
  },
  {
    src: rocketSticker,
    alt: "Rocket sticker",
    className: "bottom-[9%] right-[24%] w-[188px] lg:w-[146px] md:w-[104px] sm:w-[83px] xs:w-[73px]",
    rotate: -16,
    fallRotate: -300,
    fallX: -30,
    floatDuration: 4,
  },
];

const FloatingStickers = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
      {stickers.map(
        ({ src, alt, className, rotate, fallRotate, fallX, floatDuration }, i) => {
          const entranceDelay = FALL_START_DELAY + i * 0.15;
          const floatDelay = entranceDelay + FALL_DURATION;

          return (
            <motion.div
              key={alt}
              className={`absolute ${className}`}
              initial={{ opacity: 0, y: -400, x: fallX, rotate: rotate + fallRotate, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 1, 1],
                y: [-400, 24, -12, 0],
                x: [fallX, fallX * 0.35, fallX * 0.1, 0],
                rotate: [rotate + fallRotate, rotate - 25, rotate + 10, rotate],
                scale: [0.5, 1.08, 0.95, 1],
              }}
              transition={{
                duration: FALL_DURATION,
                times: [0, 0.55, 0.8, 1],
                ease: ["easeIn", "easeOut", "easeInOut", "easeOut"],
                delay: entranceDelay,
              }}
            >
              <motion.div
                animate={{
                  x: [0, 14, -10, 6, 0],
                  y: [0, -18, 10, -12, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  x: { duration: floatDuration * 1.6, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
                  y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
                  rotate: {
                    duration: floatDuration * 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: floatDelay,
                  },
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  className="w-full h-auto drop-shadow-lg select-none"
                  priority={false}
                />
              </motion.div>
            </motion.div>
          );
        }
      )}
    </div>
  );
};

export default FloatingStickers;
