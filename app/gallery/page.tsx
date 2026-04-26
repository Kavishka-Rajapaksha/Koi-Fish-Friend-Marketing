import { readdir } from "node:fs/promises";
import path from "node:path";
import { Footer } from "@/components/Footer";
import { GalleryGrid, type GalleryImage } from "@/components/GalleryGrid";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Gallery | KoiFishFriend",
  description: "View KoiFishFriend prototype images and field testing videos.",
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function titleFromFilename(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/^WhatsApp Image /i, "Field Image ")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  const imageDir = path.join(process.cwd(), "public", "images");
  const files = await readdir(imageDir);

  return files
    .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/images/${encodeURIComponent(file)}`,
      title: titleFromFilename(file),
    }));
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main className="animated-white-bg min-h-screen text-slate-900">
      <Navbar />
      <section className="section-shell pt-36">
        <SectionHeader
          eyebrow="Gallery"
          title="Images and Videos"
          description={`Explore ${images.length} prototype photos, pond testing images, dashboard screenshots, and demo videos for the KoiFishFriend IoT aquaculture system.`}
        />
        <GalleryGrid images={images} />
      </section>
      <Footer />
    </main>
  );
}
