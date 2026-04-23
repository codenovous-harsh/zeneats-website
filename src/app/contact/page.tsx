"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactEmails = [
  { label: "General Inquiries", email: "info@zeneats.co.in" },
  { label: "Business Development", email: "bd1@zeneats.co.in" },
  { label: "Kunal Shah", email: "kunalshah@zeneats.co.in" },
  { label: "Denil Lalan", email: "denillalan@zeneats.co.in" },
  { label: "Harshil Shah", email: "harshilshah@zeneats.co.in" },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
      );
      gsap.fromTo(
        ".contact-hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4 }
      );
      gsap.fromTo(
        ".contact-form-section",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
      );
      gsap.fromTo(
        ".contact-info-section",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6 }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message."
      );
    }
  };

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

          <h1 className="contact-hero-heading text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-[1.1] text-text-heading text-center max-w-[800px] mb-6 opacity-0">
            Get in <em className="text-accent-bright italic">touch</em>
          </h1>
          <p className="contact-hero-subtitle text-base md:text-lg text-text-primary text-center max-w-[600px] opacity-0">
            Have a question about our cafeteria management solutions? We&apos;d
            love to hear from you.
          </p>
        </section>

        {/* Form + Info Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="contact-form-section lg:col-span-3 opacity-0">
              <div className="glass-card rounded-2xl border border-white/[0.06] p-8 md:p-10">
                <h2 className="text-xl font-semibold text-text-heading mb-2">
                  Send us a message
                </h2>
                <p className="text-sm text-text-muted mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-text-heading mb-2">
                      Message sent!
                    </h3>
                    <p className="text-sm text-text-muted mb-6">
                      Thank you for reaching out. We&apos;ll get back to you
                      soon.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-sm text-accent hover:text-accent-light transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-heading focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
                        >
                          <option value="" className="bg-bg-primary">
                            Select a topic
                          </option>
                          <option
                            value="Cafeteria Setup"
                            className="bg-bg-primary"
                          >
                            Cafeteria Setup
                          </option>
                          <option
                            value="Partnership"
                            className="bg-bg-primary"
                          >
                            Partnership
                          </option>
                          <option
                            value="Vendor Inquiry"
                            className="bg-bg-primary"
                          >
                            Vendor Inquiry
                          </option>
                          <option value="Demo Request" className="bg-bg-primary">
                            Demo Request
                          </option>
                          <option value="Other" className="bg-bg-primary">
                            Other
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto bg-accent hover:bg-accent-bright text-white rounded-full px-8 py-3.5 text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="opacity-25"
                            />
                            <path
                              d="M4 12a8 8 0 018-8"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 2L11 13" />
                            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-info-section lg:col-span-2 space-y-6 opacity-0">
              {/* Email contacts */}
              <div className="glass-card rounded-2xl border border-white/[0.06] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 6L2 7" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-text-heading">
                    Email Us
                  </h3>
                </div>
                <div className="space-y-4">
                  {contactEmails.map((c) => (
                    <a
                      key={c.email}
                      href={`mailto:${c.email}`}
                      className="block group"
                    >
                      <p className="text-xs text-text-muted mb-0.5">
                        {c.label}
                      </p>
                      <p className="text-sm text-text-primary group-hover:text-accent transition-colors">
                        {c.email}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card rounded-2xl border border-white/[0.06] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-text-heading">
                    Call Us
                  </h3>
                </div>
                <a
                  href="tel:+919820465570"
                  className="text-sm text-text-primary hover:text-accent transition-colors"
                >
                  +91 98204 65570
                </a>
              </div>

              {/* Address */}
              <div className="glass-card rounded-2xl border border-white/[0.06] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-text-heading">
                    Visit Us
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Registered Address</p>
                    <p className="text-sm text-text-primary/80 leading-relaxed">
                      1602 Lodha
                      <br />
                      Lower Parel, Mumbai 400013
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Mailing Address</p>
                    <p className="text-sm text-text-primary/80 leading-relaxed">
                      B-302, Shankardhan Plaza, 3rd Floor
                      <br />
                      JN Road, Mulund West, Mumbai 400080
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
