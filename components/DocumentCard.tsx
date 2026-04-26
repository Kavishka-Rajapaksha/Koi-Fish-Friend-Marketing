"use client";

import { Download, Eye, FileText, Presentation } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DocumentCard({
  title,
  href,
  type = "PDF",
  slide = false,
}: {
  title: string;
  href: string;
  type?: string;
  slide?: boolean;
}) {
  const Icon = slide ? Presentation : FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="flex h-full flex-col justify-between p-5">
        <div>
          <div className="mb-5 grid size-12 place-items-center rounded-lg bg-cyan-300 text-slate-950">
            <Icon size={24} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-600">{type}</p>
          <h3 className="mt-2 text-lg font-black text-slate-950">{title}</h3>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <a href={href} target="_blank" rel="noreferrer">
            <Button variant="outline" className="w-full">
              View <Eye size={17} />
            </Button>
          </a>
          <a href={href} download>
            <Button className="w-full">
              Download <Download size={17} />
            </Button>
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
