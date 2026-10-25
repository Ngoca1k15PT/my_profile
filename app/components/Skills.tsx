"use client";

import { motion } from "framer-motion";
import { Smartphone, Layers, Zap, GitBranch } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
  {
    titleKey: "skills.mobile",
    icon: Smartphone,
    color: "bg-primary/10 text-primary",
    skills: [
      { name: "React Native", level: "Expert", years: 5 },
      { name: "TypeScript", level: "Advanced", years: 4 },
      { name: "skills.android", level: "Intermediate", years: 2 },
      { name: "skills.ios", level: "Intermediate", years: 2 },
    ],
  },
  {
    titleKey: "skills.architecture",
    icon: Layers,
    color: "bg-accent/10 text-accent",
    skills: [
      { name: "Redux / Redux Toolkit", level: "Expert", years: 4 },
      { name: "skills.cleanArchitecture", level: "Advanced", years: 3 },
      { name: "skills.modularCodebase", level: "Advanced", years: 4 },
      { name: "skills.designPatterns", level: "Advanced", years: 4 },
    ],
  },
  {
    titleKey: "skills.backend",
    icon: Zap,
    color: "bg-primary/10 text-primary",
    skills: [
      { name: "Socket.io", level: "Advanced", years: 4 },
      { name: "REST APIs", level: "Advanced", years: 4 },
      { name: "Firebase", level: "Advanced", years: 5 },
      { name: "GraphQL", level: "Intermediate", years: 2 },
    ],
  },
  {
    titleKey: "skills.devops",
    icon: GitBranch,
    color: "bg-accent/10 text-accent",
    skills: [
      { name: "Git & GitHub", level: "Expert", years: 5 },
      { name: "skills.cicd", level: "Advanced", years: 3 },
      { name: "Google Play Console", level: "Expert", years: 5 },
      { name: "App Store Connect", level: "Expert", years: 5 },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground";
    case "Advanced":
      return "bg-primary/20 text-primary";
    case "Intermediate":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            {t("skills.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t("skills.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="min-w-0 bg-card rounded-2xl p-3 sm:p-6 lg:p-8 shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className={`w-12 h-12 shrink-0 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon size={24} />
                </div>
                <h3 className="min-w-0 text-lg sm:text-xl font-heading font-bold">{t(category.titleKey)}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors duration-200"
                  >
                    <span className="min-w-0 break-words text-sm lg:text-base font-medium">{t(skill.name)}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{skill.years} {t(skill.years === 1 ? "skills.year" : "skills.years")}</span>
                      <span className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                        {t(`skills.${skill.level.toLowerCase()}`)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

