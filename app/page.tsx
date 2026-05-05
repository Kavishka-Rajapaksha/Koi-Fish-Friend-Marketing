"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DeviceCard } from "@/components/DeviceCard";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ModuleCard } from "@/components/ModuleCard";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { Card } from "@/components/ui/card";
import {
  dashboardFeatures,
  devices,
  domainSections,
  researchModules,
  slides,
} from "@/data/site";

const deviceSlides = [
  { src: "/images/device images/floating_machine.jpeg", label: "Smart Floating Device" },
  { src: "/images/device images/feeding_device.jpeg", label: "Automated Feeding Device" },
  { src: "/images/device images/enegy_monitoring.jpeg", label: "Power Management Device" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % deviceSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <main className="animated-white-bg min-h-screen overflow-hidden text-slate-900">
      <Navbar />
      <HeroSection />

      <section id="domain" className="section-shell">
        <SectionHeader
          eyebrow="Research Domain"
          title="A Complete Aquaculture Intelligence Layer"
          description="The domain follows the required research website structure and explains why KoiFishFriend matters, what gap it addresses, and how the prototype was built."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {domainSections.map((section, index) => (
            <motion.div key={section.title} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.04 }}>
              <Card className="h-full p-6">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-cyan-600">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-black text-slate-950">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{section.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {researchModules.map((module) => (
            <ModuleCard key={module.title} module={module} />
          ))}
        </div>
      </section>

      <section id="devices" className="section-shell bg-cyan-50/60">
        <SectionHeader
          eyebrow="Devices"
          title="Solar Devices Built for Real Pond Work"
          description="Each unit is presented as a functional prototype with the sensors, controls, and field benefits needed by farmers and administrators."
        />
        <div className="grid gap-5 lg:grid-cols-4">
          {devices.map((device) => (
            <DeviceCard key={device.title} device={device} />
          ))}
        </div>
      </section>

      <section id="dashboard" className="section-shell">
        <SectionHeader
          eyebrow="Dashboard"
          title="Control Room for the Pond"
          description="The web dashboard brings monitoring, navigation, feeding, budget analytics, AI predictions, and emergency controls into a single responsive interface."
        />
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div {...fadeUp}>
            <Card className="overflow-hidden p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={deviceSlides[slideIndex].src}
                      alt={deviceSlides[slideIndex].label}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 58vw, 100vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute left-4 top-4 z-10 rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">
                  {deviceSlides[slideIndex].label.toUpperCase()}
                </div>
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                  {deviceSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIndex(i)}
                      className={`h-2 rounded-full transition-all ${i === slideIndex ? "w-6 bg-emerald-400" : "w-2 bg-white/60"}`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div {...fadeUp} className="grid gap-3 sm:grid-cols-2">
            {dashboardFeatures.map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-3 rounded-lg border border-cyan-900/10 bg-white/75 p-4 shadow-lg shadow-cyan-950/5 backdrop-blur">
                <span className="grid size-10 place-items-center rounded-lg bg-cyan-100 text-cyan-700">
                  <Icon size={20} />
                </span>
                <p className="text-sm font-bold text-slate-800">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="milestones" className="section-shell">
        <SectionHeader
          eyebrow="Milestones"
          title="Research Progress Timeline"
          description="A clean vertical timeline for proposal, progress presentations, final assessment, and viva milestones."
        />
        <Timeline />
      </section>

      <section id="slides" className="section-shell">
        <SectionHeader
          eyebrow="Slides"
          title="Presentation Slide Decks"
          description="Proposal, progress, and final presentation resources for the university research review flow."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {slides.map((slide, index) => {
            const isUnavailable = !!slide.unavailableMessage;
            const accentColors = [
              "text-cyan-600",
              "text-emerald-600",
              "text-violet-600",
              "text-rose-500",
            ];
            const bgColors = [
              "bg-cyan-50 text-cyan-700",
              "bg-emerald-50 text-emerald-700",
              "bg-violet-50 text-violet-700",
              "bg-rose-50 text-rose-600",
            ];
            const btnColors = [
              "bg-cyan-500 hover:bg-cyan-600",
              "bg-emerald-500 hover:bg-emerald-600",
              "bg-violet-500 hover:bg-violet-600",
              "bg-rose-500 hover:bg-rose-600",
            ];
            const labels = ["Proposal", "Progress 1", "Progress 2", "Final"];
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (isUnavailable) { e.preventDefault(); window.alert(slide.unavailableMessage); }
            };
            return (
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`flex h-full flex-col justify-between p-5 ${isUnavailable ? "opacity-60" : ""}`}>
                  <div>
                    <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black ${bgColors[index]}`}>
                      <span className="opacity-60">0{index + 1}</span>
                      <span>{labels[index]}</span>
                    </div>
                    <p className={`text-xs font-black uppercase tracking-[0.24em] ${accentColors[index]}`}>Slides</p>
                    <h3 className="mt-2 text-lg font-black text-slate-950">{slide.title}</h3>
                    {isUnavailable && (
                      <p className="mt-1 text-xs text-slate-400">Not yet available</p>
                    )}
                  </div>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    <a href={slide.href} target={isUnavailable ? undefined : "_blank"} rel={isUnavailable ? undefined : "noreferrer"} onClick={handleClick}>
                      <button className="flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-slate-400">
                        View
                      </button>
                    </a>
                    <a href={slide.href} download={isUnavailable ? undefined : true} onClick={handleClick}>
                      <button className={`flex w-full items-center justify-center gap-1.5 rounded-full py-2 text-xs font-bold text-white transition-colors ${isUnavailable ? "bg-slate-300 cursor-not-allowed" : btnColors[index]}`}>
                        Download
                      </button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Card className="relative mb-6 overflow-hidden p-0">
            <div className="border-b border-cyan-900/10 bg-white/80 px-6 py-4">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-600">
                Client Review
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Video feedback and walkthrough from the client review session.
              </p>
            </div>
            <div className="aspect-video w-full bg-white">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ejLmxhETT-w"
                title="Client Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Card>

          <Card className="relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(103,232,249,.22),transparent_32%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600">
                  Professional Research Website
                </p>
                <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                  Built to present a working IoT aquaculture system with polish and clarity.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                  KoiFishFriend connects floating navigation, feeding automation, water quality monitoring,
                  mortality alerts, energy analytics, and budgeting into a single elegant research showcase.
                </p>
              </div>
              <a href="#home" className="inline-flex items-center gap-2 text-sm font-black text-cyan-700 hover:text-emerald-700">
                Back to top <ArrowUpRight size={18} />
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
