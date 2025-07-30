// components/FAQSection.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does KRPL offer?",
    answer:
      "KRPL specializes in Web Development, App Development, and Digital Marketing services tailored for businesses of all sizes.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Websites typically take 2–4 weeks. Apps and larger projects may take 1–3 months depending on scope and complexity.",
  },
  {
    question: "Do you offer SEO and social media marketing?",
    answer:
      "Yes, our digital marketing team provides SEO, social media campaigns, paid advertising, and full funnel marketing strategies.",
  },
  {
    question: "Is post-launch support included?",
    answer:
      "Absolutely. We offer ongoing maintenance, updates, and performance optimization based on your service tier.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-2 flex justify-center">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="mb-2 text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-600">
            Get quick answers to common questions about our services, processes,
            and support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between rounded-t-xl bg-gray-100 px-6 py-4 text-left"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>

                {isOpen && (
                  <div className="animate-fadeIn rounded-b-xl bg-gray-50 px-6 pb-4 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
