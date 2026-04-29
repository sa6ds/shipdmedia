"use client";

const brands = [
  "Nike",
  "Adidas",
  "Apple",
  "Samsung",
  "Coca-Cola",
  "Red Bull",
  "Spotify",
  "Netflix",
  "Amazon",
  "Google",
  "Meta",
  "TikTok",
];

export function BrandMarquee() {
  return (
    <section id="brands" className="py-16 md:py-24 border-t border-border/30">
      <div className="container mb-10">
        <p className="font-mono text-sm text-foreground/40 uppercase tracking-wider text-center">
          Trusted by leading brands
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <div key={`${brand}-${index}`} className="flex-shrink-0 px-8 md:px-12">
              <span className="text-2xl md:text-3xl font-sentient text-foreground/20 hover:text-foreground/40 transition-colors duration-300 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
