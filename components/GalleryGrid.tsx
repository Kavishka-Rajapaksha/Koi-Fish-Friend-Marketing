"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages, galleryVideos } from "@/data/site";
import { Button } from "@/components/ui/button";

export function GalleryGrid() {
  const [lightbox, setLightbox] = useState<(typeof galleryImages)[number] | null>(null);
  const [video, setVideo] = useState<(typeof galleryVideos)[number] | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((item, index) => (
          <motion.button
            key={item.src}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            onClick={() => setLightbox(item)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-cyan-900/10 bg-white text-left shadow-xl shadow-cyan-950/10"
          >
            <Image src={item.src} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-90" />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-black text-white">{item.title}</p>
          </motion.button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {galleryVideos.map((item) => (
          <button
            key={item.src}
            onClick={() => setVideo(item)}
            className="group relative aspect-video overflow-hidden rounded-lg border border-cyan-900/10 bg-white text-left shadow-xl shadow-cyan-950/10"
          >
            <video src={item.src} className="h-full w-full object-cover opacity-70" muted playsInline />
            <div className="absolute inset-0 grid place-items-center bg-slate-950/30">
              <span className="grid size-16 place-items-center rounded-full bg-cyan-300 text-slate-950 transition group-hover:scale-110">
                <Play fill="currentColor" />
              </span>
            </div>
            <p className="absolute bottom-4 left-4 text-lg font-black text-white">{item.title}</p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/90 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Button variant="outline" size="icon" className="absolute right-4 top-4" onClick={() => setLightbox(null)} aria-label="Close image">
              <X size={20} />
            </Button>
            <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/10">
              <Image src={lightbox.src} alt={lightbox.title} fill className="object-contain" sizes="100vw" />
            </div>
          </motion.div>
        )}
        {video && <VideoModal video={video} onClose={() => setVideo(null)} />}
      </AnimatePresence>
    </>
  );
}

export function VideoModal({
  video,
  onClose,
}: {
  video: (typeof galleryVideos)[number];
  onClose: () => void;
}) {
  return (
    <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/90 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Button variant="outline" size="icon" className="absolute right-4 top-4" onClick={onClose} aria-label="Close video">
        <X size={20} />
      </Button>
      <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-black">
        <video src={video.src} controls autoPlay className="aspect-video w-full" />
      </div>
    </motion.div>
  );
}
