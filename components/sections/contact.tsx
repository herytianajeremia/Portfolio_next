"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/data";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const details = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: profile.phone,
      href: `tel:+${profile.phoneRaw}`,
    },
    {
      icon: MapPin,
      label: t.contact.officeLabel,
      value: t.contact.office,
      href: null,
    },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const mailSubject = subject
      ? `[Portfolio] ${subject}`
      : `[Portfolio] Message de ${name}`;
    const body = `Nom: ${name}\nEmail: ${email}\nObjet: ${subject || "—"}\n\n${message}`;

    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email,
    )}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;

    const win = window.open(gmail, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        mailSubject,
      )}&body=${encodeURIComponent(body)}`;
    }

    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Contact details */}
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="flex h-full flex-col gap-4">
              {details.map((d) => {
                const Icon = d.icon;
                const content = (
                  <Card className="flex items-center gap-4 p-5 transition-colors hover:border-primary/40">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-0.5 break-words text-sm font-medium text-foreground">
                        {d.value}
                      </p>
                    </div>
                  </Card>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={0.12}>
            <Card className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="name" placeholder={t.contact.form.name} aria-label={t.contact.form.name} />
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.contact.form.email}
                    aria-label={t.contact.form.email}
                  />
                </div>
                <Input
                  name="subject"
                  placeholder={t.contact.form.subject}
                  aria-label={t.contact.form.subject}
                />
                <Textarea
                  name="message"
                  placeholder={t.contact.form.message}
                  aria-label={t.contact.form.message}
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div aria-live="polite" className="min-h-[1.25rem] text-sm">
                    {status === "error" && (
                      <span className="text-red-400">
                        {t.contact.form.required}
                      </span>
                    )}
                    {status === "success" && (
                      <span className="inline-flex items-center gap-1.5 text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        {t.contact.form.success}
                      </span>
                    )}
                  </div>
                  <Button type="submit" size="lg">
                    <Send className="h-4 w-4" />
                    {t.contact.form.send}
                  </Button>
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
