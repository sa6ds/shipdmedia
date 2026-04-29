"use client";

import Link from "next/link";
import { Pill } from "./pill";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative z-10 flex flex-col h-svh justify-center">
      <div className="pb-8 md:pb-0 -mt-12 md:-mt-8 text-center relative z-10">
        <Pill className="mb-6">INFLUENCER MARKETING</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Amplify your <br />
          <i className="font-light">brand&apos;s</i> reach
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Strategic influencer partnerships that connect your brand with
          millions of engaged audiences
        </p>

        <Link className="contents max-sm:hidden" href="/#contact">
          <Button className="mt-14">[Contact Us]</Button>
        </Link>
        <Link className="contents sm:hidden" href="/#contact">
          <Button size="sm" className="mt-14">
            [Contact Us]
          </Button>
        </Link>
      </div>
    </div>
  );
}
