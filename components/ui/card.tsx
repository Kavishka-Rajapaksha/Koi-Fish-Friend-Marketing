import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-cyan-900/10 bg-white/78 shadow-2xl shadow-cyan-950/10 backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
