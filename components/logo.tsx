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
          d="M3 19C4.2 20 5.4 20 6.6 19C7.8 18 9 18 10.2 19C11.4 20 12.6 20 13.8 19C15 18 16.2 18 17.4 19C18.6 20 19.8 20 21 19"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span>Shipd Media</span>
    </span>
  );
};
