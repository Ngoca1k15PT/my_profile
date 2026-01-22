"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, MessageCircle, ShoppingCart, Brain, Smartphone, HeartHandshake, Radio } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/LanguageContext";

const projects = [
  {
    title: "CuuPaw",
    subtitle: "Animal Rescue Posting App",
    description: "A mobile application that allows users to post and discover animal rescue requests, share information about animals in need, and connect volunteers and rescue groups in real time",
    problem: "Animal rescue information was scattered across social platforms, making it difficult for volunteers and rescue teams to respond quickly.",
    solution: "Built a centralized platform for posting rescue cases with real-time updates and notifications to help volunteers coordinate and respond faster.",
    techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
    platforms: ["iOS", "Android"],
    features: ["Real-time messaging", "Push notifications", "Rescue post creation", "User interaction and comments"],
    icon: HeartHandshake,
    color: "bg-primary/10 text-primary",
    link_ios: "https://apps.apple.com/vn/app/cuupaw/id6754810609",
    link_android: "https://play.google.com/store/apps/details?id=com.cuupaw&pcampaignid=web_share",
  },
  {
    title: "133ch",
    subtitle: "Live Streaming & Music App",
    description: "A real-time live streaming and music application allowing users to watch livestreams, listen to music, interact with streamers, and enjoy high-quality audio/video with low latency.",
    problem: "High latency and poor interaction reduced user engagement during livestreams",
    solution: "Optimized real-time streaming with low-latency playback, stable sockets, and interactive features",
    techStack: ["React Native", "TypeScript", "Zustand", "React Navigation", "Socket.IO", "REST API","Firebase","Stripe"],
    platforms: ["iOS", "Android"],
    features: [
      "Live streaming",
      "Music streaming",
      "Real-time chat",
      "Streamer interaction",
      "Favorites & follow system",
      "Payment system",
    ],
    icon: Radio,
    link_ios: "https://apps.apple.com/vn/app/133ch/id6618144537?l=vi",
    link_android: "https://play.google.com/store/apps/details?id=com.app133.live&pcampaignid=web_share",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "133ch-Streamer",
    subtitle: "Live Streaming & Music Upload App",
    description: "A real-time live streaming app that lets creators go live, interact with audiences, and upload music for on-demand listening. Built for smooth playback, low latency, and creator-friendly workflows.",
    problem: "Creators struggled with unstable streaming and a complicated process to publish audio content",
    solution: "Optimized low-latency streaming with reliable real-time chat, plus a simple upload-to-publish flow for music with fast processing",
    techStack: ["React Native", "TypeScript", "Zustand", "React Navigation", "Socket.IO", "REST API","Firebase","Stripe"],
    platforms: ["iOS", "Android"],
    features: [
      "Go live (low-latency streaming)",
      "Real-time chat & interactions",
      "Upload music & manage library",
      "Playback queue & favorites",
      "Creator profile & followers"
    ],
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
              key={project.title}
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
                          <h4 className="font-heading font-bold text-lg mb-1">{project.title}</h4>
                          <p className="text-muted-foreground text-sm text-center">{project.subtitle}</p>
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Problem → Solution */}
                  <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">Problem</span>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Solution</span>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
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
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
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

                  {/* Buttons */}
                  <div className="flex gap-3">
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

