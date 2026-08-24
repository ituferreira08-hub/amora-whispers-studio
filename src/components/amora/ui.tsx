import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/* ---------------- CTA button ---------------- */

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 label-xs min-h-11 px-7 py-4 transition-all duration-300 cursor-pointer select-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-ink text-ink-foreground hover:bg-wine",
        wine: "bg-wine text-wine-foreground hover:bg-ink",
        light: "bg-background text-foreground hover:bg-nude",
        outline: "border border-current text-current hover:bg-ink hover:text-ink-foreground",
        outlineLight:
          "border border-ink-foreground/60 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
        ghost: "px-0 py-2 text-foreground link-underline",
      },
      size: {
        default: "",
        sm: "px-5 py-3",
        lg: "px-9 py-5",
      },
    },
    defaultVariants: { variant: "solid", size: "default" },
  },
);

type CtaProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof ctaVariants>;

export function Cta({ className, variant, size, ...props }: CtaProps) {
  return <button className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}

/* ---------------- Reveal wrapper ---------------- */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Section label ---------------- */

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("label-xs inline-flex items-center gap-3 text-muted-foreground", className)}>
      <span aria-hidden className="h-px w-8 bg-current opacity-50" />
      {children}
    </span>
  );
}

/* ---------------- Smooth scroll ---------------- */

export function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
}
