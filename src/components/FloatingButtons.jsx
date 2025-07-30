// components/FloatingButtons.jsx
import { useEffect, useState } from "react";
import { MessageSquareText, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Chat Button (Always Visible) */}
      <a
        href="https://wa.me/+919650503696?text=Hello%20KRPL%20Team%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        className="fixed right-5 bottom-5 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700"
        title="Chat"
      >
        <MessageSquareText size={22} />
      </a>

      {/* Back to Top Button (Visible on Scroll) */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-20 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-opacity hover:bg-blue-700"
          title="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
