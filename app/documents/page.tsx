import { DocumentCard } from "@/components/DocumentCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { documents } from "@/data/site";

export const metadata = {
  title: "Documents | KoiFishFriend",
  description: "View and download KoiFishFriend research documents and individual reports.",
};

export default function DocumentsPage() {
  return (
    <main className="animated-white-bg min-h-screen text-slate-900">
      <Navbar />
      <section className="section-shell pt-36">
        <SectionHeader
          eyebrow="Documents"
          title="View and Download Documents"
          description="Access project planning documents, proposal resources, checklists, final documents, and individual research reports."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((document) => (
            <DocumentCard key={document.title} {...document} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
