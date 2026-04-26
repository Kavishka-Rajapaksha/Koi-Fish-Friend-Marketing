import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-300 text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.35)] hover:bg-emerald-300",
        outline:
          "border border-cyan-900/15 bg-white/70 text-slate-900 backdrop-blur-xl hover:border-cyan-400/70 hover:bg-cyan-50",
        ghost: "text-slate-700 hover:bg-cyan-50 hover:text-slate-950",
        danger: "bg-rose-500 text-white hover:bg-rose-400",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
