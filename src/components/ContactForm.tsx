"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meevwkov", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white border border-green-200 rounded-xl p-8 text-center">
        <p className="text-green-700 font-medium text-lg mb-2">Message sent!</p>
        <p className="text-muted">Thank you for reaching out. I&apos;ll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
            placeholder="jluczak18@gmail.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none bg-white"
          placeholder="Tell me about your project, opportunity, or question..."
        />
      </div>
      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors disabled:opacity-50"
      >
        <Send size={16} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
