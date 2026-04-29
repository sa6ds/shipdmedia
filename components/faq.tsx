"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { Pill } from "./pill";

const faqs = [
  {
    question: "What types of influencers do you work with?",
    answer:
      "We work with creators across all tiers, from niche nano voices to macro creators with millions of followers across TikTok, Instagram, YouTube, and more.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track campaign performance end-to-end through reach, engagement, clicks, conversions, and ROI with clear reporting your team can use to make faster decisions.",
  },
  {
    question: "What is your typical campaign timeline?",
    answer:
      "Most campaigns run 4-6 weeks from strategy to launch. For faster turnarounds, we also offer sprint campaigns for product drops and seasonal moments.",
  },
  {
    question: "Do you handle content creation?",
    answer:
      "Yes. We support creative strategy, briefs, approvals, and production workflows while keeping creator content native to each platform.",
  },
  {
    question: "How do you ensure brand safety?",
    answer:
      "Every creator partner is vetted for audience quality, past content, and brand alignment, with approval gates and clear campaign guardrails.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-border/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <Pill className="mb-4">FAQ</Pill>
          <h2 className="text-3xl md:text-4xl font-sentient leading-tight tracking-[-0.015em]">
            Frequently asked <i className="font-light">questions</i>
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-border/30 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
              >
                <span className="font-mono text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-snug tracking-[-0.01em]">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 mt-0.5 text-foreground/40">
                  {openIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0",
                )}
              >
                <p className="font-mono text-sm text-foreground/50 leading-snug tracking-[-0.01em]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
