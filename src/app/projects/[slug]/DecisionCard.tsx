"use client";

import { useState } from "react";

type DecisionCardProps = {
  question: string;
  answer: string;
  index: number;
};

export default function DecisionCard({ question, answer, index }: DecisionCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-surface/50 rounded-xl border border-white/5 overflow-hidden transition-all animate-in slide-in-from-bottom-4 duration-500"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group cursor-pointer"
      >
        <span className="text-sm md:text-base font-mono text-textHeading font-semibold leading-relaxed group-hover:text-sky transition-colors">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-textBody/50 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
          <p className="text-sm font-mono text-textBody leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
