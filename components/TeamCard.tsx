"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function TeamCard({
  name,
  role,
  icon,
  image,
  studentId,
  email,
  badge,
}: {
  name: string;
  role: string;
  icon?: LucideIcon;
  image?: string;
  studentId?: string;
  email?: string;
  badge?: string;
}) {
  const Icon = icon;

  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="h-full p-6 text-center">
        {image ? (
          <div className="mx-auto size-40 overflow-hidden rounded-2xl border border-cyan-900/10 bg-white shadow-lg shadow-cyan-950/10">
            <Image
              src={image}
              alt={name}
              width={160}
              height={160}
              className="h-full w-full object-cover object-[center_58%]"
            />
          </div>
        ) : Icon ? (
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-950">
            <Icon size={29} />
          </div>
        ) : null}

        {badge && (
          <span className="mt-4 inline-block rounded-full bg-cyan-100 px-3 py-0.5 text-xs font-black uppercase tracking-wide text-cyan-700">
            {badge}
          </span>
        )}

        <h3 className="mt-3 text-xl font-black text-slate-950">{name}</h3>

        {studentId && (
          <p className="mt-1 text-xs font-bold tracking-wide text-slate-400">{studentId}</p>
        )}

        <p className="mt-2 text-sm leading-6 text-slate-600">{role}</p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-3 inline-block text-xs font-semibold text-cyan-600 hover:text-cyan-800 hover:underline"
          >
            {email}
          </a>
        )}
      </Card>
    </motion.div>
  );
}
