"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type ModuleCardProps = {
  module: {
    title: string;
    icon: LucideIcon;
    points: string[];
  };
};

export function ModuleCard({ module }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full p-6">
        <div className="mb-5 grid size-12 place-items-center rounded-lg bg-emerald-300 text-slate-950">
          <Icon size={25} />
        </div>
        <h3 className="text-xl font-black text-slate-950">{module.title}</h3>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
          {module.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
