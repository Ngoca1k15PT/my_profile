"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ngoca1k15@gmail.com",
      href: "mailto:ngoca1k15@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Ngoca1k15PT",
      href: "https://github.com/Ngoca1k15PT",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/hoang-ngoc-749724153",
      href: "https://www.linkedin.com/in/hoang-ngoc-749724153",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            {t("contact.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="font-semibold">{t("contact.available")}</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("contact.available.desc")}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{t("contact.location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{t("contact.timezone")}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card hover:-translate-x-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <link.icon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{link.label === "Email" ? t("contact.email") : link.label}</div>
                    <div className="text-sm text-muted-foreground">{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all duration-200"
                    placeholder={t("contact.namePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all duration-200"
                    placeholder={t("contact.emailPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all duration-200 resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  <Send size={20} />
                  {t("contact.send")}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

