"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-cyan-900/10 bg-white/78 shadow-lg shadow-cyan-950/5 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/logo/logo.png"
            alt="KoiFishFriend logo"
            width={200}
            height={100}
            priority
          />
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button
          size="icon"
          variant="outline"
          className="lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>
      <div
        className={cn(
          "grid border-t border-cyan-900/10 bg-white/95 transition-all lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-cyan-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
