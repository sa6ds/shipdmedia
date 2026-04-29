"use client";

import { Hero } from "@/components/hero";
import { AgencySections } from "@/components/agency-sections";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { GL } from "@/components/gl";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <GL hovering={false} />
      <div className="fixed inset-0 z-10 pointer-events-none bg-black/45" />
      <main className="relative z-20">
        <Hero />
        <AgencySections />
        <FAQ />
        <Footer />
      </main>
      <Leva hidden />
    </>
  );
}
