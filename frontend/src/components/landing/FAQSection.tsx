import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "What is Defect Lens?",
    answer:
      "Defect Lens is an AI-powered visual quality inspection platform designed to help automotive manufacturing teams examine component images, review available defect findings, and understand quality information.",
  },
  {
    question: "What types of defects can it help identify?",
    answer:
      "The planned inspection workflow targets visible defects such as scratches, dents, surface cracks, rust, missing bolts, weld defects, and panel misalignment. Actual detection capabilities depend on the trained model and supported inputs.",
  },
  {
    question: "How does the inspection process work?",
    answer:
      "Users submit an automotive component image for inspection. When the model service is connected, the platform can display the returned findings and supporting information.",
  },
  {
    question: "Does Defect Lens provide real-time results?",
    answer:
      "Processing time and result availability depend on the connected backend and model service. The platform should display results only after actual processing has completed.",
  },
  {
    question: "Can I review previous inspections?",
    answer:
      "The platform is designed to support inspection history and saved records. Access to previous inspections depends on the implemented storage and account permissions.",
  },
  {
    question: "Can Defect Lens predict maintenance needs?",
    answer:
      "The predictive intelligence module is intended to analyze available inspection and maintenance records to support maintenance planning. Its usefulness depends on the quality and availability of relevant data.",
  },
  {
    question: "Are AI predictions always accurate?",
    answer:
      "No AI model is guaranteed to be accurate in every situation. Findings should be interpreted using the available evidence and validated by qualified personnel when needed.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can create an account using the registration page. Inspection features become available as the corresponding application services are implemented and connected.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-[#090b10] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Heading */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
              FAQ
            </span>
          </div>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Questions?
            <br />
            <span className="text-zinc-500">We've got answers.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
            Learn more about Defect Lens, its inspection workflow, and the
            capabilities the platform is designed to support.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-400/[0.09] text-orange-400">
              <MessageCircleQuestion size={20} />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Still have questions?
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Explore the platform to learn more.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-orange-400/25 bg-white/[0.035]"
                    : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.15]"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-medium leading-6 text-white sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 text-orange-400"
                        : "text-zinc-500"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6">
                    <p className="border-t border-white/[0.07] pt-4 text-sm leading-7 text-zinc-400">
                      {faq.answer}
                    </p>
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