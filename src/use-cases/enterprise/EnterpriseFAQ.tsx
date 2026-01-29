import { useState } from "react";
import FaqBadge from "../../assets/faqBadge.svg";

const faqs = [
  {
    question: "What Plan Fits Enterprises",
    answer:
      "Mance is a strategy and execution platform that simplifies planning, aligns teams, and provides actionable insights for businesses of all sizes.",
  },
  {
    question: "FAQ 2",
    answer:
      "Mance is a strategy and execution platform that simplifies planning, aligns teams, and provides actionable insights for businesses of all sizes.",
  },
  {
    question: "FAQ 2",
    answer:
      "Mance is a strategy and execution platform that simplifies planning, aligns teams, and provides actionable insights for businesses of all sizes.",
  },
  {
    question: "FAQ 2",
    answer:
      "Mance is a strategy and execution platform that simplifies planning, aligns teams, and provides actionable insights for businesses of all sizes.",
  },
  {
    question: "FAQ 2",
    answer:
      "Mance is a strategy and execution platform that simplifies planning, aligns teams, and provides actionable insights for businesses of all sizes.",
  },
];

export default function EnterpriseFAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );
  };

  return (
    <section className="relative mx-auto max-w-3xl px-4 py-20">
      {/* Badge */}
      <div className="mb-4 flex justify-center">
        <img src={FaqBadge} alt="FAQ Badge" className="h-7 w-25" />
      </div>

     
      <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900">
        Frequently Asked Questions
      </h2>

      
      <div className="space-y-4 overflow-hidden max-h-420px">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white shadow-sm"
            >
             
              <div className="flex items-center justify-between px-6 py-4">
               
                <span
                  className={`text-base md:text-lg font-bold transition-colors ${
                    isOpen ? "text-[#008080]" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>

       
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`ml-4 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#008080]" : "text-gray-400"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* CONTENT */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6 pb-4 text-sm  text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
