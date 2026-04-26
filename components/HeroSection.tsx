"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, Eye, Radio, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { devices, heroSlides, stats } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,.28),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(16,185,129,.2),transparent_28%),linear-gradient(135deg,#ffffff_0%,#effdfa_48%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(14,165,233,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
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
          <h1 className="text-5xl font-black leading-[0.98] text-slate-950 sm:text-7xl lg:text-8xl">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <Card className="relative overflow-hidden p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <motion.div
                className="flex h-full w-[400%]"
                animate={{ x: ["0%", "-25%", "-50%", "-75%", "0%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              >
                {heroSlides.map((slide) => (
                  <div key={slide.src} className="relative h-full w-1/4 shrink-0">
                    <Image src={slide.src} alt={slide.alt} fill priority className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  </div>
                ))}
              </motion.div>
              <div className="absolute left-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">
                SYSTEM ONLINE
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                {devices.slice(0, 3).map((device) => {
                  const Icon = device.icon;
                  return (
                    <div key={device.title} className="rounded-lg border border-white/20 bg-white/78 p-3 shadow-lg shadow-slate-950/10 backdrop-blur">
                      <Icon className="mb-2 text-cyan-200" size={20} />
                      <p className="text-sm font-bold text-slate-950">{device.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 -top-6 hidden rounded-lg border border-emerald-500/20 bg-white/78 p-4 text-emerald-700 shadow-xl shadow-emerald-950/10 backdrop-blur-xl sm:block"
          >
            <Radio size={22} />
            <p className="mt-2 text-sm font-bold">Remote Navigation</p>
          </motion.div>
          <motion.div
            animate={{ y: [10, -8, 10] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-7 left-8 hidden rounded-lg border border-rose-300/40 bg-white/78 p-4 text-rose-600 shadow-xl shadow-rose-950/10 backdrop-blur-xl sm:block"
          >
            <ShieldAlert size={22} />
            <p className="mt-2 text-sm font-bold">Emergency Stop</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
