import { useState } from "react";
import { Pill } from "./pill";

const ShipIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
    <path
      d="M4 15L12 6L20 15H4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M5 18C6.1 18.8 7.2 18.8 8.3 18C9.4 17.2 10.5 17.2 11.6 18C12.7 18.8 13.8 18.8 14.9 18C16 17.2 17.1 17.2 18.2 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M15.5 8.5L13.2 13.2L8.5 15.5L10.8 10.8L15.5 8.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
    <path
      d="M12 4L18 6.5V11.2C18 15.1 15.6 18.6 12 20C8.4 18.6 6 15.1 6 11.2V6.5L12 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12.3L11.2 14L14.8 10.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SignalIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
    <path
      d="M5 16C7 14 9.2 13 12 13C14.8 13 17 14 19 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7.5 12.5C8.8 11.3 10.2 10.7 12 10.7C13.8 10.7 15.2 11.3 16.5 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10.6 9.2C11 8.9 11.5 8.7 12 8.7C12.5 8.7 13 8.9 13.4 9.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="17.8" r="1.2" fill="currentColor" />
  </svg>
);

const brandServices = [
  { title: "Creator Sourcing", icon: ShipIcon },
  { title: "Campaign Strategy", icon: CompassIcon },
  { title: "Content Whitelisting", icon: ShieldIcon },
  { title: "Paid Amplification", icon: SignalIcon },
];

const brandMetrics = [
  { label: "Engagement Lift", value: "+20-35%" },
  { label: "Benchmark Creator Ad Recall Lift", value: "+23%" },
  { label: "Common Campaign Planning Window", value: "4-8 wks" },
];

const creatorServices = [
  { title: "Brand Deal Matching", icon: ShipIcon },
  { title: "Creative Direction", icon: CompassIcon },
  { title: "Fair Rate Support", icon: ShieldIcon },
  { title: "Performance Scaling", icon: SignalIcon },
];

const creatorMetrics = [
  { label: "Brand Budget Mix", value: "25-40%" },
  { label: "Creator Deal Cycle", value: "2-6 wks" },
  { label: "Benchmark Whitelisting Uplift", value: "+15-30%" },
];

export function AgencySections() {
  const [activeTab, setActiveTab] = useState<"brand" | "creator">("brand");
  const isBrandTab = activeTab === "brand";
  const services = isBrandTab ? brandServices : creatorServices;
  const metrics = isBrandTab ? brandMetrics : creatorMetrics;

  return (
    <>
      <section
        id="services"
        className="py-16 md:py-24 border-t border-border/30"
      >
        <div className="container">
          <div className="text-center mb-12">
            <Pill className="mb-5">WHAT WE DO</Pill>
            <h2 className="text-3xl md:text-5xl font-sentient leading-[0.98] tracking-[-0.015em]">
              We connect <i className="font-light">brands and creators</i>
            </h2>
            <p className="font-mono text-sm text-foreground/55 mt-5 max-w-[530px] mx-auto leading-snug tracking-[-0.01em]">
              Switch views to see how we support each side of the partnership.
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-full border border-border/50 bg-black/65 p-1">
              <button
                onClick={() => setActiveTab("brand")}
                className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150 ${
                  isBrandTab
                    ? "bg-primary text-black"
                    : "text-foreground/65 hover:text-foreground"
                }`}
              >
                Brands
              </button>
              <button
                onClick={() => setActiveTab("creator")}
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

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border/50 bg-black/70 px-5 py-6 md:px-6"
              >
                <div className="flex items-center gap-3 text-primary mb-4">
                  <service.icon />
                </div>
                <p className="font-mono text-sm uppercase tracking-[0.04em] text-foreground/90">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border/50 bg-black/70 px-5 py-7 md:px-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-sentient leading-none tracking-[-0.015em]">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/50">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
