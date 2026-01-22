"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const experiences = [
  {
    year: "2025 - Present",
    title: "Mid-level Mobile Developer",
    company: "FLYDINO TECHNOLOGY",
    description: "Developing and maintaining scalable React Native applications, owning features end-to-end, optimizing performance, and collaborating with product and backend teams.",
    icon: Code,
    type: "work",
  },
  {
    year: "2023 - 2024",
    title: "Junior Mobile Developer",
    company: "FLYDINO TECHNOLOGY",
    description: "Developed and shipped mobile applications using React Native, implementing user-facing features, handling state management, and integrating RESTful APIs.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2022",
    title: "Fresher Mobile Developer",
    company: "FLYDINO TECHNOLOGY",
    description: "Started my journey in mobile development, learning React Native fundamentals and best practices.",
    icon: Lightbulb,
    type: "work",
  },
  {
    year: "2018 - 2022",
    title: "University of Technology and Education",
    company: "The University of Danang (UTE)",
    description: "Graduated as an Information Technology Engineer, building a strong foundation in computer science and software development principles.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2022",
    title: "Mobile Developer Intern (React Native)",
    company: "Tech Startup / Software Company",
    description: "Interned as a Mobile Developer (React Native), building cross-platform mobile applications, integrating APIs, optimizing UI/UX, and gaining hands-on experience in real-world software development.",
    icon: Briefcase,
    type: "education",
  },
  {
    year: "2020 - 2021",
    title: "Game Tester (Part-time)",
    company: "Game Startup",
    description: "Worked as a part-time game tester at a startup company, responsible for testing gameplay features, identifying and reporting bugs, and contributing to improving game quality and user experience.",
    icon: Briefcase,
    type: "work",
  }
];

  const highlights = [
    {
      icon: Code,
      titleKey: "experience.highlight.code",
      descKey: "experience.highlight.code.desc",
    },
    {
      icon: Users,
      titleKey: "experience.highlight.team",
      descKey: "experience.highlight.team.desc",
    },
    {
      icon: Lightbulb,
      titleKey: "experience.highlight.solver",
      descKey: "experience.highlight.solver.desc",
    },
  ];

const Experience = () => {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            {t("experience.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t("experience.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("experience.description")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-20">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year + exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <div className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 inline-block ${
                  index % 2 === 0 ? "md:ml-auto" : ""
                }`}>
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      exp.type === "education" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                    }`}>
                      <exp.icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-primary">{exp.year}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{t(highlight.titleKey)}</h3>
              <p className="text-muted-foreground">{t(highlight.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

