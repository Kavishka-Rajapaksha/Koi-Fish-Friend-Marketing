"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";

const EMAILJS_SERVICE_ID  = "service_pc31145";
const EMAILJS_TEMPLATE_ID = "template_jh5nttk";
const EMAILJS_PUBLIC_KEY  = "a1Hjt1Iywn1cQcF-v";
const CONTACT_EMAIL       = "ishasewwandi26@gmail.com";

export function ContactForm() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  name,
          from_email: email,
          name:       name,
          email:      email,
          subject,
          message,
          time:       new Date().toLocaleString(),
          to_email:   CONTACT_EMAIL,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setName(""); setEmail(""); setSubject(""); setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-lg bg-emerald-300 text-slate-950">
          <Mail size={22} />
        </span>
        <div>
          <h3 className="text-xl font-black text-slate-950">Project Inquiry</h3>
          <p className="text-sm text-slate-500">{CONTACT_EMAIL}</p>
        </div>
      </div>

      {status === "success" && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          <CheckCircle size={16} /> Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600">
          <AlertCircle size={16} /> Failed to send. Please try again.
        </div>
      )}

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Your name"     aria-label="Your name"     value={name}    onChange={(e) => setName(e.target.value)}    required />
          <Input placeholder="Email address" aria-label="Email address" value={email}   onChange={(e) => setEmail(e.target.value)}   required type="email" />
        </div>
        <Input    placeholder="Subject"                          aria-label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        <Textarea placeholder="Tell us about your project inquiry" aria-label="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <Button type="submit" className="w-full sm:w-fit" disabled={status === "sending"}>
          {status === "sending" ? (
            <><Loader2 size={17} className="animate-spin" /> Sending…</>
          ) : (
            <>Send Inquiry <Send size={17} /></>
          )}
        </Button>
      </form>
    </Card>
  );
}
