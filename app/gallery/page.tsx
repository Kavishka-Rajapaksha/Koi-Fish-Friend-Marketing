import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Gallery | KoiFishFriend",
  description: "View KoiFishFriend prototype images and field testing videos.",
};

export default function GalleryPage() {
  return (
    <main className="animated-white-bg min-h-screen text-slate-900">
      <Navbar />
      <section className="section-shell pt-36">
        <SectionHeader
          eyebrow="Gallery"
          title="Images and Videos"
          description="Explore prototype photos, pond testing images, dashboard screenshots, and demo videos for the KoiFishFriend IoT aquaculture system."
        />
        <GalleryGrid />
      </section>
      <Footer />
    </main>
  );
}
