"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, MessageCircle, ShoppingCart, Brain, Smartphone } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const projects = [
  {
    title: "ChatFlow",
    subtitle: "Real-time Messaging App",
    description: "A social chat application with real-time messaging, group chats, media sharing, and push notifications. Built for seamless communication with WebSocket integration.",
    problem: "Users needed a fast, reliable way to communicate in real-time",
    solution: "Implemented Socket.io for instant messaging with offline support and message sync",
    techStack: ["React Native", "TypeScript", "Redux", "Socket.io", "Firebase"],
    platforms: ["iOS", "Android"],
    features: ["Real-time messaging", "Push notifications", "Media sharing", "Offline support"],
    icon: MessageCircle,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "ShopEase",
    subtitle: "E-commerce Mobile App",
    description: "A full-featured e-commerce application with product catalog, cart management, secure payments, and order tracking. Focused on smooth UX and fast performance.",
    problem: "Complex checkout flows were causing cart abandonment",
    solution: "Streamlined UX with one-tap checkout and persistent cart across devices",
    techStack: ["React Native", "TypeScript", "Redux Toolkit", "REST API", "Stripe"],
    platforms: ["iOS", "Android"],
    features: ["Product search", "Secure payments", "Order tracking", "Wishlist"],
    icon: ShoppingCart,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "MindTask",
    subtitle: "AI-Powered Productivity App",
    description: "A smart task management app with AI-powered prioritization, natural language input, and smart reminders. Designed to boost productivity without complexity.",
    problem: "Traditional todo apps required too much manual organization",
    solution: "AI automatically categorizes and prioritizes tasks based on context and deadlines",
    techStack: ["React Native", "TypeScript", "Redux", "OpenAI API", "SQLite"],
    platforms: ["iOS", "Android"],
    features: ["AI task sorting", "Natural language", "Smart reminders", "Analytics"],
    icon: Brain,
    color: "bg-primary/10 text-primary",
  },
];

const Projects = () => {
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
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real mobile applications I've built — focusing on performance, scalability, and exceptional user experience
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
                    <span className="text-sm font-semibold mb-2 block">Key Features</span>
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
                    <span className="text-sm font-semibold mb-2 block">Tech Stack</span>
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
                    <Button variant="default" size="sm">
                      <ExternalLink size={16} />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github size={16} />
                      GitHub
                    </Button>
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

