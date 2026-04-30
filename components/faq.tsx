"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { Pill } from "./pill";

const brandFaqs = [
  {
    question: "How do you match our brand with the right creators?",
    answer:
      "We shortlist creators using your audience profile, content style, and campaign goals, then present vetted options that already fit your tone and category.",
  },
  {
    question: "Do you handle campaign management end-to-end?",
    answer:
      "Yes. We run outreach, negotiation, briefs, approvals, posting schedules, and reporting so your internal team stays focused on growth.",
  },
  {
    question: "What results do you track for brands?",
    answer:
      "We track reach, engagement quality, clicks, conversions, and return on spend, with simple reporting that shows what to scale next.",
  },
  {
    question: "Can you support paid usage and whitelisting?",
    answer:
      "Absolutely. We structure usage rights, run creator whitelisting, and amplify top-performing content through paid media when it makes sense.",
  },
  {
    question: "How do you keep campaigns brand-safe?",
    answer:
      "Every creator is reviewed for audience quality, content history, and fit. We also build clear guardrails and approvals before anything goes live.",
  },
];

const creatorFaqs = [
  {
    question: "How do I get matched with brand deals?",
    answer:
      "We pair you with campaigns based on your niche, audience, and content performance so the partnerships feel natural to your page.",
  },
  {
    question: "Do creators get support during campaigns?",
    answer:
      "Yes. You get clear briefs, fast communication, timeline support, and feedback so you can focus on creating content that performs.",
  },
  {
    question: "How are rates and payment handled?",
    answer:
      "We help negotiate fair rates and define usage terms up front. Payment timelines are locked in before launch so there are no surprises.",
  },
  {
    question: "Do I keep creative control?",
    answer:
      "Always. We align on campaign goals and non-negotiables, then protect your voice so content stays authentic to your audience.",
  },
  {
    question: "Can I work with you long-term?",
    answer:
      "Definitely. Many creators start with one campaign and grow into recurring partnerships with brands that fit their lane.",
  },
];

export function FAQ() {
  const [activeTab, setActiveTab] = useState<"brand" | "creator">("brand");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isBrandTab = activeTab === "brand";
  const faqs = isBrandTab ? brandFaqs : creatorFaqs;

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-border/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <Pill className="mb-4">FAQ</Pill>
          <h2 className="text-3xl md:text-4xl font-sentient leading-tight tracking-[-0.015em]">
            Questions from <i className="font-light">both sides</i>
          </h2>
          <p className="font-mono text-sm text-foreground/55 mt-5 max-w-[530px] mx-auto leading-snug tracking-[-0.01em]">
            Pick your side to see answers built for your goals.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full border border-border/50 bg-black/65 p-1">
            <button
              onClick={() => {
                setActiveTab("brand");
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150 ${
                isBrandTab
                  ? "bg-primary text-black"
                  : "text-foreground/65 hover:text-foreground"
              }`}
            >
              Brands
            </button>
            <button
              onClick={() => {
                setActiveTab("creator");
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150 ${
                !isBrandTab
                  ? "bg-primary text-black"
                  : "text-foreground/65 hover:text-foreground"
              }`}
            >
              Creators
            </button>
          </div>
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
