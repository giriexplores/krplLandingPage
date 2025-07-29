// components/Footer.jsx
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Mail,
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
          <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a
                className="flex cursor-pointer items-center gap-2 hover:text-white"
                href="https://www.facebook.com/profile.php?id=61572443643522"
                target="_blank"
              >
                <Facebook size={18} /> Facebook
              </a>
            </li>
            <li>
              <a
                className="flex cursor-pointer items-center gap-2 hover:text-white"
                href="https://www.instagram.com/lelekart_shop/"
                target="_blank"
              >
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li>
              <a
                className="flex cursor-pointer items-center gap-2 hover:text-white"
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                className="flex cursor-pointer items-center gap-2 hover:text-white"
                href="https://www.youtube.com/@Lelekart_Shop"
                target="_blank"
              >
                <Youtube size={18} /> Youtube
              </a>
            </li>
            <li>
              <a
                className="flex cursor-pointer items-center gap-2 hover:text-white"
                href="https://www.youtube.com/@Lelekart_Shop"
                target="_blank"
              >
                <Mail size={18} /> Email
              </a>
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
