"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowUpRight, Cpu, Database, LayoutDashboard } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { DeviceCard } from "@/components/DeviceCard";
import { DocumentCard } from "@/components/DocumentCard";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { HeroSection } from "@/components/HeroSection";
import { ModuleCard } from "@/components/ModuleCard";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { Timeline } from "@/components/Timeline";
import { Card } from "@/components/ui/card";
import {
  dashboardFeatures,
  devices,
  documents,
  domainSections,
  researchModules,
  slides,
  supervisor,
  teamMembers,
} from "@/data/site";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

export default function Home() {
  const inquiryItems = [
    {
      icon: LayoutDashboard,
      title: "Dashboard demo",
      body: "Request a guided walkthrough of control panel features.",
    },
    {
      icon: Database,
      title: "Research material",
      body: "Ask for project documents, reports, or presentation resources.",
    },
    {
      icon: Cpu,
      title: "Prototype inquiry",
      body: "Discuss device modules, sensors, cloud alerts, or analytics.",
    },
    {
      icon: AlertTriangle,
      title: "Field testing",
      body: "Plan safety-first pond testing and emergency control scenarios.",
    },
  ];

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
                <Image src="/images/dashboard.jpg" alt="KoiFishFriend dashboard UI" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
                <div className="absolute left-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">
                  LIVE CAMERA + CONTROLS
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

      <section id="gallery" className="section-shell bg-emerald-50/60">
        <SectionHeader
          eyebrow="Gallery"
          title="Prototype Images and Field Demo Videos"
          description="Image gallery and modal video playback use the uploaded assets from the field tests and prototype build process."
        />
        <GalleryGrid />
      </section>

      <section id="milestones" className="section-shell">
        <SectionHeader
          eyebrow="Milestones"
          title="Research Progress Timeline"
          description="A clean vertical timeline for proposal, progress presentations, final assessment, and viva milestones."
        />
        <Timeline />
      </section>

      <section id="documents" className="section-shell bg-cyan-50/60">
        <SectionHeader
          eyebrow="Documents"
          title="Research Documents and Reports"
          description="Download cards for project planning, core documents, checklists, final documents, and individual reports."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((document) => (
            <DocumentCard key={document.title} {...document} />
          ))}
        </div>
      </section>

      <section id="slides" className="section-shell">
        <SectionHeader
          eyebrow="Slides"
          title="Presentation Slide Decks"
          description="Proposal, progress, and final presentation resources for the university research review flow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {slides.map((slide) => (
            <DocumentCard key={slide.title} title={slide.title} href={slide.href} type="Slides" slide />
          ))}
        </div>
      </section>

      <section id="about" className="section-shell bg-emerald-50/60">
        <SectionHeader
          eyebrow="About Us"
          title="Research Team"
          description="The project combines device engineering, environmental monitoring, analytics, and dashboard design into one coordinated aquaculture platform."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
        <div className="mx-auto mt-5 max-w-md">
          <TeamCard {...supervisor} />
        </div>
      </section>

      <section id="contact" className="section-shell">
        <SectionHeader
          eyebrow="Contact Us"
          title="Start a Project Conversation"
          description="Use the inquiry UI for research questions, demonstrations, documentation requests, or collaboration discussions."
        />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-6">
            <div className="grid gap-4">
              {inquiryItems.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 rounded-lg border border-cyan-900/10 bg-white/70 p-4 shadow-lg shadow-cyan-950/5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-emerald-300 text-slate-950">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-black text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <ContactForm />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
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
