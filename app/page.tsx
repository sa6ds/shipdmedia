"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { AgencySections } from "@/components/agency-sections";
import { FAQ } from "@/components/faq";
import { Contract } from "@/components/contract";
import { Footer } from "@/components/footer";
import { GL } from "@/components/gl";
import { Leva } from "leva";

export default function Home() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <GL hovering={hovering} />
      <div className="fixed inset-0 z-10 pointer-events-none bg-black/45" />
      <main className="relative z-20">
        <Hero onHoverChange={setHovering} />
        <AgencySections />
        <Contract />
        <FAQ />
        <Footer />
      </main>
      <Leva hidden />
    </>
  );
}
