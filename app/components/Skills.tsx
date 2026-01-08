"use client";

import { motion } from "framer-motion";
import { Smartphone, Layers, Zap, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "bg-primary/10 text-primary",
    skills: [
      { name: "React Native", level: "Expert", years: "4 years" },
      { name: "TypeScript", level: "Advanced", years: "3 years" },
      { name: "Android Development", level: "Intermediate", years: "2 years" },
      { name: "iOS Development", level: "Intermediate", years: "2 years" },
    ],
  },
  {
    title: "State & Architecture",
    icon: Layers,
    color: "bg-accent/10 text-accent",
    skills: [
      { name: "Redux / Redux Toolkit", level: "Expert", years: "3 years" },
      { name: "Clean Architecture", level: "Advanced", years: "2 years" },
      { name: "Modular Codebase", level: "Advanced", years: "3 years" },
      { name: "Design Patterns", level: "Advanced", years: "3 years" },
    ],
  },
  {
    title: "Real-time & Backend",
    icon: Zap,
    color: "bg-primary/10 text-primary",
    skills: [
      { name: "Socket.io", level: "Advanced", years: "2 years" },
      { name: "REST APIs", level: "Expert", years: "4 years" },
      { name: "Firebase", level: "Advanced", years: "3 years" },
      { name: "GraphQL", level: "Intermediate", years: "1 year" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "bg-accent/10 text-accent",
    skills: [
      { name: "Git & GitHub", level: "Expert", years: "4 years" },
      { name: "CI/CD Pipelines", level: "Advanced", years: "2 years" },
      { name: "Fastlane", level: "Intermediate", years: "2 years" },
      { name: "App Store Connect", level: "Advanced", years: "3 years" },
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit refined through years of building real-world mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors duration-200"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{skill.years}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                        {skill.level}
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

