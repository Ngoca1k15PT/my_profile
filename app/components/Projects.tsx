"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, HeartHandshake, Radio, Bike, UserRound } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/LanguageContext";

const projects = [
  {
    id: "gacharin",
    title: "ガチャリン (Gacharin)",
    subtitle: "projects.gacharin.subtitle",
    description: "projects.gacharin.description",
    problem: "projects.gacharin.problem",
    solution: "projects.gacharin.solution",
    solo: true,
    techStack: [],
    platforms: ["iOS", "Android"],
    features: ["projects.gacharin.feature.0", "projects.gacharin.feature.1", "projects.gacharin.feature.2", "projects.gacharin.feature.3", "projects.gacharin.feature.4"],
    icon: Bike,
    color: "bg-accent/10 text-accent",
    link_ios: "https://apps.apple.com/jp/app/%E3%82%AC%E3%83%81%E3%83%A3%E3%83%AA%E3%83%B3/id6793797509",
    link_android: "https://play.google.com/store/apps/details?id=com.ktc_tracking_bike",
  },
  {
    id: "cuupaw",
    solo: true,
    title: "CuuPaw",
    subtitle: "projects.cuupaw.subtitle",
    description: "projects.cuupaw.description",
    problem: "projects.cuupaw.problem",
    solution: "projects.cuupaw.solution",
    techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
    platforms: ["iOS", "Android"],
    features: ["projects.cuupaw.feature.0", "projects.cuupaw.feature.1", "projects.cuupaw.feature.2", "projects.cuupaw.feature.3"],
    icon: HeartHandshake,
    color: "bg-primary/10 text-primary",
    link_ios: "https://apps.apple.com/vn/app/cuupaw/id6754810609",
    link_android: "https://play.google.com/store/apps/details?id=com.cuupaw&pcampaignid=web_share",
  },
  {
    id: "133ch",
    solo: false,
    title: "133ch",
    subtitle: "projects.133ch.subtitle",
    description: "projects.133ch.description",
    problem: "projects.133ch.problem",
    solution: "projects.133ch.solution",
    techStack: ["React Native", "TypeScript", "Zustand", "React Navigation", "Socket.IO", "REST API","Firebase","Stripe"],
    platforms: ["iOS", "Android"],
    features: ["projects.133ch.feature.0", "projects.133ch.feature.1", "projects.133ch.feature.2", "projects.133ch.feature.3", "projects.133ch.feature.4", "projects.133ch.feature.5"],
    icon: Radio,
    link_ios: "https://apps.apple.com/vn/app/133ch/id6618144537?l=vi",
    link_android: "https://play.google.com/store/apps/details?id=com.app133.live&pcampaignid=web_share",
    color: "bg-accent/10 text-accent",
  },
  {
    id: "133chStreamer",
    solo: false,
    title: "133ch-Streamer",
    subtitle: "projects.133chStreamer.subtitle",
    description: "projects.133chStreamer.description",
    problem: "projects.133chStreamer.problem",
    solution: "projects.133chStreamer.solution",
    techStack: ["React Native", "TypeScript", "Zustand", "React Navigation", "Socket.IO", "REST API","Firebase","Stripe"],
    platforms: ["iOS", "Android"],
    features: ["projects.133chStreamer.feature.0", "projects.133chStreamer.feature.1", "projects.133chStreamer.feature.2", "projects.133chStreamer.feature.3", "projects.133chStreamer.feature.4"],
    icon: Radio,
    link_ios: "https://apps.apple.com/jp/app/133ch-streamer/id6618147513",
    link_android: "https://play.google.com/store/apps/details?id=com.streamerliveapp&pcampaignid=web_share",
    color: "bg-primary/10 text-primary",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            {t("projects.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Phone Mockup */}
                <div className={`relative p-8 lg:p-12 flex items-center justify-center ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                } bg-gradient-to-br from-secondary/50 to-secondary`}>
                  <div className="relative">
                    {/* Phone frame */}
                    <div className="w-48 md:w-56 h-96 md:h-[420px] bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-card rounded-[2rem] overflow-hidden relative">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl" />
                        
                        {/* App content mockup */}
                        <div className="w-full h-full flex flex-col items-center justify-center p-6">
                          <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center mb-4`}>
                            <project.icon size={32} />
                          </div>
                          <h4 className="w-full text-center break-words font-heading font-bold text-lg leading-snug mb-1">{project.title}</h4>
                          <p className="text-muted-foreground text-sm text-center">{t(project.subtitle)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="absolute -right-4 top-1/4 bg-card shadow-card rounded-xl px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <Smartphone size={16} className="text-primary" />
                        <span className="text-xs font-medium">{project.platforms.join(" & ")}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 shrink-0 ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl font-heading font-bold break-words">{project.title}</h3>
                      <p className="text-muted-foreground">{t(project.subtitle)}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{t(project.description)}</p>

                  {project.solo && (
                    <div className="bg-primary/10 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <UserRound size={18} className="shrink-0" />
                        <span>{t("projects.solo")}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t("projects.solo.description")}</p>
                    </div>
                  )}

                  {/* Problem → Solution */}
                  <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">{t("projects.problem")}</span>
                      <p className="text-sm text-muted-foreground">{t(project.problem)}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">{t("projects.solution")}</span>
                      <p className="text-sm text-muted-foreground">{t(project.solution)}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <span className="text-sm font-semibold mb-2 block">{t("projects.features")}</span>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground"
                        >
                          {t(feature)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  {project.techStack.length > 0 && (
                    <div className="mb-8">
                      <span className="text-sm font-semibold mb-2 block">{t("projects.techStack")}</span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    {project.link_ios && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.link_ios} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          iOS
                        </a>
                      </Button>
                    )}
                    {project.link_android && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.link_android} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Android
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

