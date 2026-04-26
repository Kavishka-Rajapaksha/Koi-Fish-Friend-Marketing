import { AlertTriangle, Cpu, Database, LayoutDashboard } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Contact Us | KoiFishFriend",
  description: "Contact the KoiFishFriend research project team.",
};

const inquiryItems = [
  {
    icon: LayoutDashboard,
    title: "Dashboard demo",
    body: "Request a guided walkthrough of control panel features.",
  },
  {
    icon: Database,
    title: "Research material",
    body: "Ask for project documents, reports, or presentation resources.",
  },
  {
    icon: Cpu,
    title: "Prototype inquiry",
    body: "Discuss device modules, sensors, cloud alerts, or analytics.",
  },
  {
    icon: AlertTriangle,
    title: "Field testing",
    body: "Plan safety-first pond testing and emergency control scenarios.",
  },
];

export default function ContactPage() {
  return (
    <main className="animated-white-bg min-h-screen text-slate-900">
      <Navbar />
      <section className="section-shell pt-36">
        <SectionHeader
          eyebrow="Contact Us"
          title="Project Inquiry"
          description="Send research questions, demonstration requests, documentation requests, or collaboration inquiries to the KoiFishFriend team."
        />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-6">
            <div className="grid gap-4">
              {inquiryItems.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-lg border border-cyan-900/10 bg-white/70 p-4 shadow-lg shadow-cyan-950/5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-emerald-300 text-slate-950">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-black text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
