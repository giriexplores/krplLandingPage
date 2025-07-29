// components/Footer.jsx
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#021B3A] px-4 pt-12 pb-6 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        {/* Logo & About */}
        <div>
          <span className="text-xl font-bold">KRPL Tech</span>
          <p className="text-sm leading-relaxed text-gray-300">
            KRPL delivers innovative web development, app solutions, and digital
            marketing to help your business grow and succeed in the digital
            world.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["About Us", "FAQ's", "Services", "Latest Blog", "Contact Us"].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex cursor-pointer items-center gap-2 hover:text-white"
                >
                  <ChevronRight size={16} />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Web Development",
              "App Development",
              "Digital Marketing",
              "Brand Strategy",
              "E-Commerce Solutions",
              "Support & Maintenance",
            ].map((item, i) => (
              <li
                key={i}
                className="flex cursor-pointer items-center gap-2 hover:text-white"
              >
                <ChevronRight size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Follow us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex cursor-pointer items-center gap-2 hover:text-white">
              <Facebook size={18} /> Facebook
            </li>
            <li className="flex cursor-pointer items-center gap-2 hover:text-white">
              <Instagram size={18} /> Instagram
            </li>
            <li className="flex cursor-pointer items-center gap-2 hover:text-white">
              <Linkedin size={18} /> LinkedIn
            </li>
            <li className="flex cursor-pointer items-center gap-2 hover:text-white">
              <Youtube size={18} /> Youtube
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} KRPL. All rights reserved.
      </div>
    </footer>
  );
}
