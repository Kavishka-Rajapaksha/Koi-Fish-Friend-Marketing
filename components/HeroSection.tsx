"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, Eye } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { stats } from "@/data/site";
import { Button } from "@/components/ui/button";

const deviceImages = [
  { src: "/images/bg_remove_device/1.png", alt: "Smart Floating Device" },
  { src: "/images/bg_remove_device/2.png", alt: "Automated Feeding Device" },
  { src: "/images/bg_remove_device/3.png", alt: "Power Management Device" },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % deviceImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.35]"
        src="/videos/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/pond-demo.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,.34),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(16,185,129,.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,.78)_0%,rgba(236,254,255,.7)_48%,rgba(255,255,255,.82)_100%)]" />
      <div className="absolute inset-0 bg-cyan-50/25 mix-blend-screen" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(14,165,233,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.95fr_1.05fr] lg:px-8">

        {/* ── Left text col ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/70 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-lg shadow-cyan-950/5 backdrop-blur">
            <BadgeCheck size={16} />
            IoT-enabled aquaculture research platform
          </div>
          <h1 className="text-5xl font-black leading-[0.98] text-slate-950 sm:text-7xl lg:text-[6.8rem]">
            KoiFishFriend
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-cyan-800 sm:text-2xl">
            Smart IoT Aquaculture Management System
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Solar-powered floating monitoring, automated feeding, water quality analytics,
            mortality alerts, energy metering, budgeting, and remote dashboard control for
            small and medium fish farms.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#domain">
              <Button className="w-full sm:w-auto">
                Explore System <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#devices">
              <Button variant="outline" className="w-full sm:w-auto">
                View Devices <Eye size={18} />
              </Button>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="rounded-lg border border-cyan-900/10 bg-white/70 p-4 shadow-lg shadow-cyan-950/5 backdrop-blur"
              >
                <div className="text-2xl font-black text-cyan-700">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right image slider ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative flex items-center justify-center lg:pl-6"
        >
          <div className="relative h-[580px] w-full max-w-[640px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -18 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0"
              >
                <Image
                  src={deviceImages[current].src}
                  alt={deviceImages[current].alt}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



