"use client";

import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { milestones } from "@/data/site";

const statusColor: Record<string, string> = {
  Completed: "text-emerald-600",
  "In Review": "text-amber-500",
  Upcoming: "text-slate-400",
};

const dotColor: Record<string, string> = {
  Completed: "border-emerald-400 bg-emerald-50 text-emerald-600",
  "In Review": "border-amber-400 bg-amber-50 text-amber-500",
  Upcoming: "border-slate-300 bg-white text-slate-400",
};

const lineColor: Record<string, string> = {
  Completed: "bg-emerald-400",
  "In Review": "bg-amber-400",
  Upcoming: "bg-slate-200",
};

export function Timeline() {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="relative min-w-[640px]">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-[52px] h-px bg-slate-200" />

        <div className="relative grid" style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}>
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col items-center px-3"
            >
              {/* Step number */}
              <p className="mb-3 text-xs font-black text-slate-400">0{index + 1}</p>

              {/* Dot */}
              <div className={`relative z-10 grid size-[42px] shrink-0 place-items-center rounded-full border-2 shadow-md ${dotColor[item.status] ?? dotColor.Upcoming}`}>
                <CalendarCheck size={18} />
              </div>

              {/* Progress segment under dot */}
              <div className={`mt-0 h-1 w-full rounded-full ${lineColor[item.status] ?? lineColor.Upcoming}`} style={{ marginTop: "-1px", position: "relative", zIndex: 0 }} />

              {/* Card */}
              <div className="mt-4 w-full rounded-xl border border-cyan-900/10 bg-white/80 p-4 shadow-lg shadow-cyan-950/10 backdrop-blur">
                <p className={`text-[10px] font-black uppercase tracking-[0.22em] ${statusColor[item.status] ?? statusColor.Upcoming}`}>
                  {item.status}
                </p>
                <h3 className="mt-1 text-sm font-black leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
