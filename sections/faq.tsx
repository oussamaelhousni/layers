"use client";
import Badge from "@/components/badge";
import { useState } from "react";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  const [selectedFaq, setSelectedFaq] = useState<null | number>(null);
  return (
    <section>
      <div className="container mx-auto px-4 max-w-[1000px] py-8">
        <Badge text="FEATURES" variant="primary" className="mx-auto" />
        <h2 className="text-4xl font-semibold text-center text-white mt-8">
          Questions? we have got <span className="text-primary">answers</span>
        </h2>

        <div className="flex flex-col gap-4 items-stretch mt-8">
          {faqs.map((f, index) => (
            <Faq
              faq={f}
              selectedFaq={selectedFaq}
              setSelected={setSelectedFaq}
              index={index}
              key={"faq" + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({
  faq,
  selectedFaq,
  setSelected,
  index,
}: {
  faq: (typeof faqs)[0];
  selectedFaq?: number | null;
  setSelected: (value: number | null) => void;
  index: number;
}) {
  return (
    <div className="p-4 border border-neutral-500 w-full rounded-xl">
      <h3 className="flex items-center justify-between font-semibold">
        {faq.question}
        <button
          onClick={() =>
            setSelected(
              !selectedFaq ? index : selectedFaq === index ? null : null
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A3E635"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </h3>

      {selectedFaq === index && (
        <p className="py-4 description">{faq.answer}</p>
      )}
    </div>
  );
}
