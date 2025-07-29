// components/TestimonialSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, TechNova",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote:
      "KRPL built our website and mobile app with outstanding quality. Their team was responsive, creative, and delivered on time. Highly recommended for any business going digital!",
  },
  {
    name: "Priya Desai",
    role: "Marketing Lead, UrbanReach",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote:
      "KRPL’s digital marketing strategies helped us grow our online presence and attract more customers. We saw a real boost in leads and engagement!",
  },
  {
    name: "Alex Romero",
    role: "CTO, CodeBrew",
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    quote:
      "The KRPL team delivered a robust app for our business. Their support and technical expertise made the process smooth and successful.",
  },
  {
    name: "Emily Harper",
    role: "CEO, CloudSync",
    avatar:
      "https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg",
    quote:
      "KRPL’s web development and marketing services helped us double our workflow efficiency and reach new markets.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-[#F5F8FE] px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 font-semibold text-blue-600">Testimonial</p>
        <h2 className="mb-12 text-3xl font-bold text-gray-900">
          Customer’s Feedback
        </h2>

        {/* Avatars Row */}
        <div className="mb-8 flex items-center justify-center gap-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-16 w-16 rounded-full border-4 ${
                index === i
                  ? "border-blue-500"
                  : "border-transparent opacity-50 hover:opacity-80"
              } overflow-hidden transition-all duration-300`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            <ArrowLeft />
          </button>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl px-4 text-gray-700"
            >
              <p className="mb-6 text-lg">{current.quote}</p>

              {/* Stars */}
              <div className="mb-2 flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg font-semibold text-gray-900">
                {current.name}
              </p>
              <p className="text-sm text-gray-500">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
