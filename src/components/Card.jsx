// components/Card.jsx
import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Card({ icon: Icon, title, description }) {
  const [rotated, setRotated] = React.useState(false);

  // When mouse enters, rotate; when mouse leaves, rotate back
  const handleMouseEnter = () => setRotated(true);
  const handleMouseLeave = () => setRotated(false);

  return (
    <div
      className="perspective h-80 w-full max-w-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{ rotateY: rotated ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="transform-style preserve-3d relative h-full w-full"
      >
        {/* Front Side */}
        <div className="absolute flex h-full w-full flex-col justify-between rounded-lg bg-white p-6 shadow-md backface-hidden">
          <Icon className="h-10 w-10 text-blue-600" />
          <div>
            <h3 className="mb-2 text-xl text-black font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <span className="mt-4 text-sm font-semibold text-black">
            READ MORE &raquo;
          </span>
        </div>

        {/* Back Side (same as front, but blue) */}
        <div className="rotateY-180 absolute flex h-full w-full flex-col justify-between rounded-lg bg-blue-600 p-6 shadow-md backface-hidden">
          <Icon className="h-10 w-10 text-white" />
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-blue-100">{description}</p>
          </div>
          <span className="mt-4 text-sm font-semibold text-white">
            READ MORE &raquo;
          </span>
        </div>
      </motion.div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
