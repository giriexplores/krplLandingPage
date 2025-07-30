// components/OurServicesSection.jsx
import {
  Bot,
  LayoutDashboard,
  MonitorSmartphone,
  Users2,
  SendHorizonal,
  Plug,
} from "lucide-react";
import Card from "./Card";

export default function OurServicesSection() {
  const services = [
    {
      title: "Web Development",
      icon: MonitorSmartphone,
      description:
        "Modern, responsive websites tailored to your business goals and brand identity.",
      backText: "Fast, secure, and scalable web solutions for every industry.",
    },
    {
      title: "App Development",
      icon: Bot,
      description:
        "Custom mobile and web applications that engage users and drive results.",
      backText:
        "From concept to launch, we deliver robust and user-friendly apps.",
    },
    {
      title: "Digital Marketing",
      icon: LayoutDashboard,
      description:
        "SEO, social media, and paid campaigns to grow your online presence and ROI.",
      backText: "Data-driven strategies for measurable business growth.",
    },
    {
      title: "Brand Strategy",
      icon: Users2,
      description:
        "Creative branding and design to help your business stand out online.",
      backText: "Build a memorable and impactful brand with KRPL.",
    },
    {
      title: "E-Commerce Solutions",
      icon: Plug,
      description:
        "Launch and grow your online store with our end-to-end e-commerce services.",
      backText: "Seamless shopping experiences for your customers.",
    },
    {
      title: "Support & Maintenance",
      icon: SendHorizonal,
      description:
        "Ongoing support and updates to keep your digital assets running smoothly.",
      backText: "We’re here for you, every step of the way.",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#0F172A] px-4 py-20 text-white">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-2 font-semibold tracking-wide text-blue-500 uppercase">
          Services We Provide
        </p>
        <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
          Empowering Your Business with Innovation,
          <br className="hidden sm:block" />
          Efficiency and Unmatched Expertise
        </h2>
      </div>

      {/* Grid of Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <Card key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
