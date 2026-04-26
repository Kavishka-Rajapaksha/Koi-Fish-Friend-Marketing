import { AboutContent } from "@/components/AboutContent";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "About Us | KoiFishFriend",
  description: "Meet the KoiFishFriend research team and supervisor.",
};

export default function AboutPage() {
  return (
    <main className="animated-white-bg min-h-screen text-slate-900">
      <Navbar />
      <section className="section-shell pt-36">
        <SectionHeader
          eyebrow="About Us"
          title="Research Team"
          description="KoiFishFriend is built by a focused research team combining IoT devices, environmental sensing, analytics, and farmer-friendly dashboard design."
        />
        <AboutContent />
      </section>
      <Footer />
    </main>
  );
}
