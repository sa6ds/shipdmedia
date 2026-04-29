"use client";

import Link from "next/link";
import { Pill } from "./pill";
import { Button } from "./ui/button";

export function Hero({ onHoverChange }: { onHoverChange: (hovering: boolean) => void }) {
  return (
    <div className="relative z-10 flex flex-col h-svh justify-start pt-32 md:pt-40">
      <div className="text-center relative z-10">
        <Pill className="mb-6">INFLUENCER MARKETING</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient leading-[0.95] tracking-[-0.02em]">
          Amplify your <br />
          <i className="font-light">brand&apos;s</i> reach
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-7 max-w-[420px] mx-auto leading-snug tracking-[-0.01em]">
          Strategic influencer partnerships that connect your brand with
          millions of engaged audiences
        </p>

        <Link className="contents max-sm:hidden" href="/#contact">
          <Button
            className="mt-14"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
          >
            [Contact Us]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#contact">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
          >
            [Contact Us]
          </Button>
        </Link>
      </div>
    </div>
  );
}
