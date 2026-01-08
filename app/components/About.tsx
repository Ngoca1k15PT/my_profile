"use client";

import { motion } from "framer-motion";
import { Heart, Target, Sparkles, Coffee } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const passions = [
    {
      icon: Heart,
      titleKey: "about.passion.product",
      descKey: "about.passion.product.desc",
    },
    {
      icon: Target,
      titleKey: "about.passion.problem",
      descKey: "about.passion.problem.desc",
    },
    {
      icon: Sparkles,
      titleKey: "about.passion.quality",
      descKey: "about.passion.quality.desc",
    },
    {
      icon: Coffee,
      titleKey: "about.passion.learner",
      descKey: "about.passion.learner.desc",
    },
  ];
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-4">
              {t("about.title")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              {t("about.heading")}
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {t("about.p1").split(/\{mobile\}/g).map((part, index) => 
                  index === 1 ? (
                    <span key={index} className="text-foreground font-medium">{t("about.p1.mobile")}</span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
              </p>
              <p>
                {t("about.p2").split(/\{rn\}/g).map((part, index) => 
                  index === 1 ? (
                    <span key={index} className="text-foreground font-medium">{t("about.p2.rn")}</span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
              </p>
              <p>
                {t("about.p3").split(/\{key\}/g).map((part, index) => 
                  index === 1 ? (
                    <span key={index} className="text-foreground font-medium">{t("about.p3.key")}</span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
              </p>
              <p>
                {t("about.p4")}
              </p>
            </div>
          </motion.div>

          {/* Passion Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {passions.map((passion, index) => (
              <motion.div
                key={passion.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}>
                  <passion.icon size={24} />
                </div>
                <h3 className="font-heading font-bold mb-2">{t(passion.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(passion.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

