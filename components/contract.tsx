"use client";

import Link from "next/link";
import { Pill } from "./pill";
import { Button } from "./ui/button";

export function Contract() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-border/30"
    >
      <div className="container">
        <div className="rounded-2xl border border-border/50 bg-black/75 px-6 py-10 text-center">
          <Pill className="mb-4">CONTRACT</Pill>
          <h3 className="mt-3 text-2xl md:text-4xl font-sentient leading-tight tracking-[-0.015em]">
            Let&apos;s scale your next campaign
          </h3>
          <p className="mt-4 max-w-xl mx-auto font-mono text-sm text-foreground/60 leading-snug tracking-[-0.01em]">
            From creator selection to reporting, Shipd Media runs influencer
            programs that move awareness and revenue.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="sm">
              <Link
                href="https://calendly.com/sa6ds1/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Schedule on Calendly]
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="mailto:hello@shipdmedia.com">[Email Us]</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

