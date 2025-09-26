import React from "react";
import Section from "../components/Section";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <>
      <Section title="About Hydroid" subtitle="Company Overview">
        <p>
          Hydroid builds intelligent metering systems for water and gas,
          empowering organizations to measure, manage, and optimize consumption
          with precision.
        </p>
      </Section>

      <Section title="Vision & Mission">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="text-lg font-semibold">Vision</div>
            <p className="mt-1 text-sm text-muted-foreground">
              A world where resources are monitored in real time and wasted less.
            </p>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="text-lg font-semibold">Mission</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Deliver reliable, secure, and scalable metering platforms for
              everyone.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Our Team">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["CEO – Hari Babu", "Product Manager – RJ", "Lead Engineer – Akash"].map(
            (name, i) => (
              <div key={i} className="rounded-2xl border p-6 shadow-sm">
                <div className="h-20 w-20 rounded-full bg-muted" />
                <div className="mt-4 font-semibold">{name}</div>
                <p className="text-sm text-muted-foreground">
                  Building the future of metering.
                </p>
              </div>
            )
          )}
        </div>
      </Section>

      <Section title="Achievements & Recognition">
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            "ISO-certified manufacturing",
            "Deployed across 10+ cities",
            "Utility-grade accuracy",
            "Awarded innovation grant",
          ].map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border p-4"
            >
              <CheckCircle2 className="mt-0.5" /> {t}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
