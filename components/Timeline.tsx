"use client";

import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { milestones } from "@/data/site";

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-emerald-300 to-transparent md:left-1/2" />
      <div className="space-y-5">
        {milestones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative grid gap-4 pl-14 md:grid-cols-2 md:pl-0 ${index % 2 ? "md:text-left" : "md:text-right"}`}
          >
            <div className={index % 2 ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{item.status}</p>
                <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.date}</p>
              </div>
            </div>
            <span className="absolute left-0 top-5 grid size-10 place-items-center rounded-full border border-cyan-300/40 bg-slate-950 text-cyan-200 md:left-1/2 md:-translate-x-1/2">
              <CalendarCheck size={19} />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
