"use client";

import { TeamCard } from "@/components/TeamCard";
import { Card } from "@/components/ui/card";
import { supervisor, teamMembers } from "@/data/site";

export function AboutContent() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
      <div className="mx-auto mt-5 max-w-md">
        <TeamCard {...supervisor} />
      </div>
      <Card className="mt-8 p-6 text-center">
        <h2 className="text-2xl font-black text-slate-950">KoiFishFriend Research Focus</h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          The project focuses on smart floating navigation, automated feeding, fish mortality
          detection, water quality monitoring, maintenance reminders, energy metering, budgeting,
          analytics, alerts, and remote dashboard control for small and medium aquaculture farms.
        </p>
      </Card>
    </>
  );
}
