// components/ContactSection.jsx
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Leave Comment
        </h2>

        <form className="space-y-6">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border bg-gray-100 p-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border bg-gray-100 p-3 text-sm"
            />
          </div>

          {/* Save Info */}
          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="saveInfo" className="h-4 w-4" />
            <label htmlFor="saveInfo" className="text-gray-700">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          {/* Row 2: Phone + Website */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Phone"
              className="w-full rounded-md border bg-gray-100 p-3 text-sm"
            />
            <input
              type="text"
              placeholder="Your Website"
              className="w-full rounded-md border bg-gray-100 p-3 text-sm"
            />
          </div>

          {/* Comment */}
          <textarea
            rows="6"
            placeholder="Your comment..."
            className="w-full resize-none rounded-md border bg-gray-100 p-3 text-sm"
          ></textarea>

          {/* Submit + Subscribe */}
          <div className="space-y-4">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Post Comment <ArrowRight size={18} />
            </button>

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" id="subscribe" className="h-4 w-4" />
              <label htmlFor="subscribe" className="text-gray-700">
                Receive news updates via email from this site
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
