import { Waves } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-cyan-900/10 bg-white/80 px-4 py-10 shadow-[0_-16px_40px_rgba(8,145,178,0.06)] backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="grid size-10 place-items-center rounded-lg bg-cyan-300 text-slate-950">
            <Waves size={21} />
          </Link>
          <div>
            <p className="font-black text-slate-950">KoiFishFriend</p>
            <p className="text-sm text-slate-500">IoT-Enabled Aquaculture Management System</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-cyan-700">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
