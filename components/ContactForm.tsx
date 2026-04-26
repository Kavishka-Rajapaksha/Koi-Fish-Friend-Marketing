"use client";

import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";

export function ContactForm() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-lg bg-emerald-300 text-slate-950">
          <Mail size={22} />
        </span>
        <div>
          <h3 className="text-xl font-black text-slate-950">Project Inquiry</h3>
          <p className="text-sm text-slate-500">koi.fish.friend.research@example.com</p>
        </div>
      </div>
      <form className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Your name" aria-label="Your name" />
          <Input placeholder="Email address" type="email" aria-label="Email address" />
        </div>
        <Input placeholder="Subject" aria-label="Subject" />
        <Textarea placeholder="Tell us about your project inquiry" aria-label="Message" />
        <Button type="button" className="w-full sm:w-fit">
          Send Inquiry <Send size={17} />
        </Button>
      </form>
    </Card>
  );
}
