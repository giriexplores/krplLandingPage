// components/WhoWeAreSection.jsx
import { FileText, Globe } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        {/* Left: Image */}
        <div className="flex-1">
          <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-[10px] border-white shadow-lg">
            <img
              src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg"
              alt="KRPL Team"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div>
            <p className="mb-1 font-semibold text-blue-600 uppercase">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              KRPL: Your Partner for Digital Success
            </h2>
          </div>
          <p className="text-base leading-relaxed text-gray-600">
            KRPL is a leading provider of web development, app development, and
            digital marketing solutions. We empower businesses to thrive in the
            digital era with innovative technology, creative design, and
            data-driven marketing strategies.
          </p>

          {/* Mission */}
          <div className="flex items-start gap-4">
            <div className="text-blue-600">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Our Mission
              </h4>
              <p className="text-sm text-gray-600">
                To deliver exceptional web and app solutions, and drive
                measurable growth for our clients through innovative digital
                marketing. We are committed to quality, creativity, and results.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-start gap-4">
            <div className="text-blue-600">
              <Globe className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Our Vision
              </h4>
              <p className="text-sm text-gray-600">
                To be the most trusted partner for businesses seeking digital
                transformation, by providing cutting-edge web, app, and
                marketing solutions that accelerate success and growth.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            <a
              href="#about"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              More About Us <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
