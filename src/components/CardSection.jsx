// components/CardSection.jsx
import { Database, ShieldCheck, Cpu, Cloud } from "lucide-react";
import Card from "./Card";

export default function CardSection() {
  const cards = [
    {
      title: "Web Development",
      icon: Cloud,
      description:
        "Custom websites built for performance, security, and your unique business needs.",
      backText:
        "Modern, responsive, and scalable web solutions for your brand.",
    },
    {
      title: "App Development",
      icon: Database,
      description:
        "Mobile and web apps that engage users and drive business growth.",
      backText:
        "From idea to launch, we deliver robust and user-friendly applications.",
    },
    {
      title: "Digital Marketing",
      icon: Cpu,
      description:
        "Grow your reach and boost ROI with our data-driven digital marketing services.",
      backText: "SEO, social media, and paid ads tailored for your goals.",
    },
    {
      title: "Brand Strategy",
      icon: ShieldCheck,
      description:
        "Build a memorable brand with our creative and strategic expertise.",
      backText: "We help you stand out and connect with your audience.",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
