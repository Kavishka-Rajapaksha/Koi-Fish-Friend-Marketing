"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function TeamCard({
  name,
  role,
  icon: Icon,
}: {
  name: string;
  role: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="h-full p-6 text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-950">
          <Icon size={29} />
        </div>
        <h3 className="mt-5 text-xl font-black text-white">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{role}</p>
      </Card>
    </motion.div>
  );
}
