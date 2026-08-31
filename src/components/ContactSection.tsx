import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Copy,
  Check,
  Send,
  MapPin,
  Sparkles,
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';
import { sound } from '../utils/audio';

interface ContactSectionProps {
  onCopyEmail: () => void;
  onCopyPhone: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyEmail,
  onCopyPhone,
  onShowToast
}) => {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
    sending: boolean;
    sent: boolean;
  }>({
    name: '',
    email: '',
    message: '',
    sending: false,
    sent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast('Please fill out all fields.');
      sound.playClick(300, 'sawtooth');
      return;
    }

    setFormState((prev) => ({ ...prev, sending: true }));
    sound.playClick(600, 'sine');
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        sending: false,
        sent: true
      });
      sound.playSuccess();
      onShowToast('Message transmitted! Gursimran will get back to you.');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neo-border">
      {/* Single Large Card CTA Banner */}
      <div className="neo-card p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Pitch & Direct Contact Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="neo-badge bg-neo-green text-black">
                LET'S TALK STARTUPS & VENTURES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-neo-text font-display leading-tight">
                Want to collaborate on BookMyEmergency, startups, or finance?
              </h2>
              <p className="text-sm sm:text-base text-neo-muted leading-relaxed font-medium">
                I'm always keen to connect with founders, mentors, technology leaders, college seniors, and community builders. Let's exchange ideas and build impact!
              </p>
            </div>

            {/* Contact Action Buttons */}
            <div className="space-y-3 pt-2">
              <div
                onClick={() => {
                  onCopyEmail();
                  sound.playSuccess();
                }}
                className="p-4 rounded-2xl bg-neo-bg border-2 border-neo-border flex items-center justify-between cursor-pointer hover:border-neo-green transition-all shadow-[2px_2px_0px_var(--border-color)] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neo-green text-black border border-black flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-neo-muted">Direct Email</div>
                    <div className="text-xs sm:text-sm font-black font-mono text-neo-text group-hover:text-emerald-500">
                      gursimran7058@gmail.com
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl bg-neo-card border border-neo-border text-xs font-mono font-bold text-neo-text group-hover:bg-neo-green group-hover:text-black">
                  Copy
                </span>
              </div>

              <a
                href="tel:+917508002768"
                onClick={() => sound.playClick(600, 'sine')}
                className="p-4 rounded-2xl bg-neo-bg border-2 border-neo-border flex items-center justify-between hover:border-neo-purple transition-all shadow-[2px_2px_0px_var(--border-color)] group block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neo-purple text-black border border-black flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-neo-muted">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-black font-mono text-neo-text group-hover:text-purple-500">
                      +91 7508002768
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl bg-neo-card border border-neo-border text-xs font-mono font-bold text-neo-text group-hover:bg-neo-purple group-hover:text-black flex items-center gap-1">
                  <span>Call</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/gursimran-singh-jodhka-75a361321/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(650, 'sine')}
                className="p-4 rounded-2xl bg-neo-bg border-2 border-neo-border flex items-center justify-between hover:border-neo-blue transition-all shadow-[2px_2px_0px_var(--border-color)] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neo-blue text-black border border-black flex items-center justify-center font-bold">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-neo-muted">LinkedIn Network</div>
                    <div className="text-xs sm:text-sm font-black font-mono text-neo-text group-hover:text-blue-500">
                      gursimran-singh-jodhka-75a361321
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl bg-neo-card border border-neo-border text-xs font-mono font-bold text-neo-text group-hover:bg-neo-blue group-hover:text-black flex items-center gap-1">
                  <span>Connect</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Direct Message Box */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-neo-bg border-2 border-neo-border shadow-[4px_4px_0px_var(--border-color)]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-neo-border">
              <span className="text-xs font-mono font-bold text-neo-text flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-neo-green" />
                <span>Send Quick Message</span>
              </span>
              <span className="text-[11px] font-mono text-neo-muted">Ludhiana, India 📍</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-neo-text">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neo-card border-2 border-neo-border text-sm text-neo-text placeholder-zinc-400 outline-none font-mono focus:border-neo-green"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-neo-text">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neo-card border-2 border-neo-border text-sm text-neo-text placeholder-zinc-400 outline-none font-mono focus:border-neo-green"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-neo-text">Message</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Drop a note, advice, or feedback..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neo-card border-2 border-neo-border text-sm text-neo-text placeholder-zinc-400 outline-none font-mono resize-none focus:border-neo-green"
                />
              </div>

              <button
                type="submit"
                disabled={formState.sending}
                className="w-full py-3 px-6 rounded-xl bg-neo-green text-black font-extrabold text-sm neo-btn flex items-center justify-center gap-2"
              >
                {formState.sending ? (
                  <span>Transmitting...</span>
                ) : formState.sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs font-mono text-neo-muted font-bold space-y-2">
        <div>
          © {new Date().getFullYear()} Gursimran Singh Jodhka. 17 y/o Class 11 Commerce Scholar.
        </div>
        <div className="flex items-center justify-center gap-4 text-neo-text">
          <a
            href="https://www.linkedin.com/in/gursimran-singh-jodhka-75a361321/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a href="mailto:gursimran7058@gmail.com" className="hover:underline">
            gursimran7058@gmail.com
          </a>
          <span>•</span>
          <a href="tel:+917508002768" className="hover:underline">
            +91 7508002768
          </a>
        </div>
      </footer>
    </section>
  );
};
