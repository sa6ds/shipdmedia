"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      if (currentY < 20) {
        setVisible(true);
      } else if (scrollingDown) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 pt-6 md:pt-8 top-0 left-0 w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="flex items-center justify-between container py-2 px-3 md:px-4 rounded-full border border-border/30 bg-black/30 backdrop-blur-md">
        <a href="/" className="flex items-center">
          <Logo className="w-[100px] md:w-[120px]" />
        </a>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {["Services", "FAQ", "Contact"].map((item) => (
            <a
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          href="#contact"
        >
          Book Call
        </a>
        <MobileMenu />
      </header>
    </div>
  );
};
