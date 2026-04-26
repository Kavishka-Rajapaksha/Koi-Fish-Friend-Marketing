import { Waves } from "lucide-react";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg bg-cyan-300 text-slate-950">
            <Waves size={21} />
          </span>
          <div>
            <p className="font-black text-white">KoiFishFriend</p>
            <p className="text-sm text-slate-400">IoT-Enabled Aquaculture Management System</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-400 hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
