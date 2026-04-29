import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono uppercase tracking-[0.2em] text-primary",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4 md:size-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M3 16L12 5L21 16H3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M6 19C7.2 20 8.4 20 9.6 19C10.8 18 12 18 13.2 19C14.4 20 15.6 20 16.8 19C18 18 19.2 18 20.4 19"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      Shipd Media
    </span>
  );
};
