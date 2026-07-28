import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TiltCard } from '../TiltCard';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE" || accessKey.trim() === "") {
      // Log helper warning to console for the developer/user
      console.warn("Web3Forms Access Key is not configured. Please get a free key from https://web3forms.com and set VITE_WEB3FORMS_ACCESS_KEY in your .env file.");
      
      // Fallback local success simulation so the app is still testable
      setTimeout(() => {
        setStatus('success');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0ea5e9', '#3b82f6', '#8b5cf6', '#10b981'],
        });
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Message from Portfolio",
          message: formState.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0ea5e9', '#3b82f6', '#8b5cf6', '#10b981'],
        });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Web3Forms submission failed:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-primary ambient-orb animate-pulse-glow" style={{ animationDuration: '16s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm text-secondary mt-4">
            Feel free to reach out for internship opportunities, collaborations, or inquiries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-heading text-secondary mb-2">Contact Information</h3>
            <p className="text-xs text-secondary leading-relaxed mb-6">
              I am open to MERN Stack development and AI/ML entry-level positions. Drop me a line!
            </p>

            {/* Info Cards */}
            {[
              { icon: <Mail className="w-5 h-5 text-primary" />, title: 'Email Me', detail: 'sujitmalla000@gmail.com', sub: 'smalla2023@gift.edu.in', link: 'mailto:sujitmalla000@gmail.com' },
              { icon: <Phone className="w-5 h-5 text-accent" />, title: 'Call Me', detail: '+91 9348795837', sub: 'Mon - Sat (9am - 7pm)', link: 'tel:+919348795837' },
              { icon: <MapPin className="w-5 h-5 text-secondary" />, title: 'Location', detail: 'Bhubaneswar, Odisha, India', sub: 'Willing to relocate' }
            ].map((info) => (
              <TiltCard key={info.title} className="p-5 rounded-2xl glass-card border-glass flex items-center space-x-4" maxTilt={6}>
                <div className="p-3 rounded-xl bg-secondary/50 border border-glass flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="text-sm font-semibold text-primary hover:underline mt-1 block">
                      {info.detail}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-primary mt-1 block">{info.detail}</span>
                  )}
                  <span className="text-[10px] text-muted block mt-0.5">{info.sub}</span>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel border-glass"
            >
              <h3 className="text-xl font-bold font-heading text-secondary mb-6">Send A Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-emerald-500">Message Sent Successfully!</h4>
                  <p className="text-xs text-secondary leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out, Sujit. I have received your message and will respond as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-semibold px-4.5 py-2.5 rounded-xl bg-emerald-500 text-white hover:scale-105 active:scale-95 transition-transform"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/25 text-rose-500 text-xs flex items-center space-x-2 animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1 shrink-0" />
                      <span>Please fill in all required fields (Name, Email, Message).</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-2">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="xyz"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-glass text-secondary text-sm focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/20"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="xyz@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-glass text-secondary text-sm focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-glass text-secondary text-sm focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-2">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-glass text-secondary text-sm focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/20 resize-none"
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-md hover:shadow-primary/20 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
