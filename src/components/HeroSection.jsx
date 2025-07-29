import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Web Development Excellence",
    description:
      "KRPL crafts modern, high-performance websites tailored to your business goals. Elevate your online presence with our expert web development team.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
  },
  {
    title: "Innovative App Solutions",
    description:
      "From concept to launch, KRPL builds robust and user-friendly mobile and web applications that drive engagement and growth.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    title: "Digital Marketing That Delivers",
    description:
      "Boost your brand visibility and reach your target audience with KRPL’s data-driven digital marketing strategies.",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
  },
  {
    title: "Your Technology Partner",
    description:
      "Partner with KRPL for end-to-end digital solutions—web, app, and marketing—to accelerate your business success.",
    image: "https://images.pexels.com/photos/6829543/pexels-photo-6829543.jpeg",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rotateX = activeIndex * 90;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 second delay between rotations
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-[80vh] min-h-[60vh] items-center justify-center overflow-hidden bg-gray-900 px-2 sm:px-4">
      {/* 3D Cuboid Container */}
      <div className="perspective mx-auto aspect-[16/9] min-h-[300px] w-full max-w-4xl sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        <motion.div
          className="cuboid relative h-full w-full"
          animate={{ rotateX }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1], // Custom easing for smooth rotation
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`face face-${i + 1} relative flex flex-col items-center justify-center bg-cover bg-center text-white`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
              }}
            >
              {/* Content that appears on the active face */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: i === activeIndex ? 1 : 0.7,
                  scale: i === activeIndex ? 1 : 0.9,
                  y: i === activeIndex ? 0 : 10,
                }}
                transition={{
                  duration: 0.8,
                  delay: i === activeIndex ? 0.3 : 0,
                }}
                className="max-w-2xl px-4 text-center sm:px-8"
              >
                <h1 className="xs:text-3xl mb-4 text-2xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="xs:text-base mb-6 text-sm leading-relaxed text-gray-200 sm:text-lg md:text-xl">
                  {slide.description}
                </p>
                <motion.a
                  href="#contact"
                  className="inline-block transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </motion.div>

              {/* Phase indicator */}
              <div className="absolute right-4 bottom-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium">
                {i + 1}/4
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Custom CSS for 3D Effect */}
      <style jsx>{`
        .perspective {
          perspective: 1500px;
          perspective-origin: center center;
        }

        .cuboid {
          transform-style: preserve-3d;
          transform-origin: center center;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .face-1 {
          transform: rotateX(0deg) translateZ(200px);
        }

        .face-2 {
          transform: rotateX(90deg) translateZ(200px);
        }

        .face-3 {
          transform: rotateX(180deg) translateZ(200px);
        }

        .face-4 {
          transform: rotateX(270deg) translateZ(200px);
        }

        @media (max-width: 768px) {
          .face-1,
          .face-2,
          .face-3,
          .face-4 {
            transform: rotateX(var(--rotation, 0deg)) translateZ(150px);
          }

          .face-1 {
            --rotation: 0deg;
          }
          .face-2 {
            --rotation: 90deg;
          }
          .face-3 {
            --rotation: 180deg;
          }
          .face-4 {
            --rotation: 270deg;
          }
        }

        @media (max-width: 480px) {
          .face-1,
          .face-2,
          .face-3,
          .face-4 {
            transform: rotateX(var(--rotation, 0deg)) translateZ(120px);
          }
        }
      `}</style>
    </section>
  );
}
