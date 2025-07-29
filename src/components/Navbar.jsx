import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Web Development", href: "#" },
    { name: "App Development", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Brand Strategy", href: "#" },
    { name: "E-Commerce Solutions", href: "#" },
    { name: "Support & Maintenance", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w‑7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gray-800">
              KRPL Tech
            </a>
          </div>
          <div className="hidden space-x-6 md:flex md:items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="inline-flex items-center text-gray-700 hover:text-blue-600"
              >
                Services
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21l4.77 4.77 4.77-4.77 1.06 1.06-5.83 5.83-5.83-5.83z" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute mt-2 w-56 rounded-md border bg-white py-2 shadow-lg"
                  >
                    {services.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </a>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(false)}
                className="inline-flex items-center text-gray-700 hover:text-blue-600"
                onClickCapture={() => setServicesOpen(false)}
              >
                Resources
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21l4.77 4.77 4.77-4.77 1.06 1.06-5.83 5.83-5.83-5.83z" />
                </svg>
              </button>
              <AnimatePresence>
                {/** Reuse servicesOpen state or separate */}
              </AnimatePresence>
            </div>
          </div>
          <div>
            <button className="hidden rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 md:inline-block">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t bg-white md:hidden"
          >
            <div className="space-y-1 px-2 pt-2 pb-4">
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Home
              </a>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full rounded px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                Services
              </button>
              {servicesOpen && (
                <div className="space-y-1 pl-4">
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                About Us
              </a>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Blogs
              </a>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                FAQ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
