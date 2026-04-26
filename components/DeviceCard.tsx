"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type DeviceCardProps = {
  device: {
    title: string;
    image: string;
    icon: LucideIcon;
    description: string;
    features: string[];
    sensors: string[];
    benefits: string[];
  };
};

export function DeviceCard({ device }: DeviceCardProps) {
  const Icon = device.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.55 }}
    >
      <Card className="h-full overflow-hidden">
        <div className="relative aspect-[4/3]">
          <Image src={device.image} alt={device.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg bg-cyan-300 text-slate-950">
              <Icon size={23} />
            </span>
            <h3 className="text-xl font-black text-white">{device.title}</h3>
          </div>
        </div>
        <div className="space-y-5 p-5">
          <p className="text-sm leading-7 text-slate-600">{device.description}</p>
          {[
            ["Features", device.features],
            ["Sensors", device.sensors],
            ["Benefits", device.benefits],
          ].map(([label, values]) => (
            <div key={label as string}>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
                {label as string}
              </p>
              <div className="flex flex-wrap gap-2">
                {(values as string[]).map((value) => (
                  <span key={value} className="rounded-full border border-cyan-900/10 bg-cyan-50/80 px-3 py-1 text-xs font-medium text-slate-700">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.article>
  );
}
