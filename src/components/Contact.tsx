"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function Contact() {
  const { contact } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setMessageSent(true);

    try {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.8 },
        colors: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
        disableForReducedMotion: true,
      });
    } catch (_) {}

    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-white dark:bg-[#0B1120] overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-1/2 left-4 w-48 h-48 rounded-full bg-[#4285F4]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-4 w-48 h-48 rounded-full bg-[#EA4335]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] text-xs font-semibold mb-3 border border-blue-200/50 dark:border-blue-800/50">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Open for Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border-2 border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                Looking for internships, hackathon teammates, or interesting tech discussions.
              </p>

              {/* Editable Social Links */}
              <div className="space-y-3">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#4285F4] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 animate-bounce-subtle" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Email Address
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                        {contact.emailPlaceholder}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-500 hover:text-[#4285F4] hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#34A853]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Item */}
                <a
                  href="https://github.com/placeholder-chaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#4285F4] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4285F4] group-hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        GitHub Profile
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        github.com/your-username
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#4285F4] transition-colors" />
                </a>

                {/* LinkedIn Item */}
                <a
                  href="https://linkedin.com/in/placeholder-chaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#EA4335] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#EA4335] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EA4335] group-hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        LinkedIn Profile
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        linkedin.com/in/your-profile
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#EA4335] transition-colors" />
                </a>
              </div>

              {/* Editable indicator notice */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700/80 text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FBBC04]" />
                <span>Easily customize links in <code>portfolioData.ts</code></span>
              </div>
            </div>
          </div>

          {/* Right Column: Friendly Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-playful">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Send a Friendly Note
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                Have a question or just want to discuss tech? Drop your message below.
              </p>

              {messageSent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-[#34A853] text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#34A853] text-white flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Message Ready!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Thanks for reaching out! Once your portfolio is connected to your email service (or form endpoint), this will land directly in your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Chen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#4285F4] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#4285F4] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Chaitanya, let's collaborate on..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#4285F4] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full font-semibold text-sm text-white bg-[#4285F4] hover:bg-[#3367D6] shadow-sm hover:shadow-card-blue transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

