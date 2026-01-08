"use client";

import { motion } from "framer-motion";
import { Heart, Target, Sparkles, Coffee } from "lucide-react";

const passions = [
  {
    icon: Heart,
    title: "Product Mindset",
    description: "I build apps that people actually want to use — not just code that works.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Complex challenges excite me. I love finding elegant solutions to tricky mobile problems.",
  },
  {
    icon: Sparkles,
    title: "Quality Obsessed",
    description: "Performance, UX, and maintainability aren't afterthoughts — they're built in from day one.",
  },
  {
    icon: Coffee,
    title: "Continuous Learner",
    description: "The mobile landscape evolves fast. I stay curious and keep my skills sharp.",
  },
];

const About = () => {
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              More Than Just Code
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a <span className="text-foreground font-medium">Mobile Developer</span> who genuinely loves what I do. 
                There's something magical about turning an idea into an app that thousands of people use every day.
              </p>
              <p>
                Over the past 4 years, I've focused on <span className="text-foreground font-medium">React Native</span> because 
                it lets me build beautiful, high-performance apps for both iOS and Android without compromise.
              </p>
              <p>
                What drives me? <span className="text-foreground font-medium">Shipping products that matter.</span> I care 
                deeply about the end-user experience, and I take pride in writing code that's not just functional, 
                but maintainable and scalable for the long term.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or enjoying a good cup of coffee while brainstorming my next project.
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
                key={passion.title}
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
                <h3 className="font-heading font-bold mb-2">{passion.title}</h3>
                <p className="text-sm text-muted-foreground">{passion.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

