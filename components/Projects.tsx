"use client";
import React from "react";
import { motion } from "motion/react";

type Project = {
  name: string;
  typeLabel: "Personal" | "Hackathon" | "Contributor";
  description: string;
  image: string; // path in /public
  github?: string;
  devpost?: string; // for hackathons only
  builtWith: string[];
};

const projects: Project[] = [
  {
    name: "RESA",
    typeLabel: "Personal",
    description: "Restaurant Employee Scheduling Application (RESA)",
    image: "/resa.webp",
    github: "https://github.com/balebbae/RESA",
    builtWith: [
      "Go",
      "TypeScript",
      "Next.js",
      "Chi",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Swagger",
      "Zap",
    ],
  },
  {
    name: "Ebby",
    typeLabel: "Hackathon",
    description: "Health Application for SMU Students",
    image: "/ebby.webp",
    github: "https://github.com/sachi-jh/hacksmu/",
    devpost: "https://devpost.com/software/ibm-please-hire-us",
    builtWith: [
      "Python",
      "TypeScript",
      "Next.js",
      "Flask",
      "WebSocket",
      "OpenCV",
      "ScraperAPI",
      "MediaPipe",
      "ChromaDB",
      "TalkJS",
      "OpenAPI",
    ],
  },
  {
    name: "Fluently",
    typeLabel: "Hackathon",
    description: "English Pronunciation Application",
    image: "/fluently.webp",
    github: "https://github.com/kellyxzhou/hackuta",
    devpost: "https://devpost.com/software/fluentlyl",
    builtWith: [
      "Python",
      "TypeScript",
      "Next.js",
      "Flask",
      "PropelAuth",
      "MongoDB",
    ],
  },
  {
    name: "Aqua Sentry",
    typeLabel: "Hackathon",
    description: "Drown Detection Application",
    image: "/aquasentry.webp",
    github: "https://github.com/balebbae/hacktx",
    devpost: "https://devpost.com/software/aqua-sentry",
    builtWith: ["Python", "TypeScript", "Flask", "Next.js"],
  },
  {
    name: "HackPortal",
    typeLabel: "Contributor",
    description: "Hackathon Organizer Tool - 1000+ students/yr",
    image: "/hackportal.webp",
    github: "https://github.com/hackutd/hackportal/",
    builtWith: ["TypeScript", "Firebase", "Next.js"],
  },
];

const icon = {
  github: "/icons/brand-github.svg",
  devpost: "/icons/circle-dashed-letter-d.svg",
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F1ECE4] text-neutral-900">
      <div className="mx-auto max-w-[1040px] px-10 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-sans text-sm tracking-[0.25em] uppercase text-neutral-600"
        >
          CALEB’S
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-2 font-serif text-5xl md:text-6xl leading-none"
        >
          PROJECTS
        </motion.h1>

        <div className="mt-10 space-y-20">
          {projects.map((p, idx) => (
            <motion.section
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              {/* Left: Title + image */}
              <div className="md:col-span-6">
                <div className="flex items-center gap-4">
                  <h2 className="font-serif text-3xl md:text-4xl">{p.name}</h2>
                </div>
                <div className="mt-4">
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    className="w-full h-auto rounded-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Right: description + type + icons + built with */}
              <div className="md:col-span-6">
                <p className="text-lg md:text-xl font-medium">
                  {p.description}
                </p>
                <div className="mt-2 flex items-center gap-3 text-sm italic text-neutral-800">
                  <span>{p.typeLabel}</span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                    >
                      <img src={icon.github} alt="GitHub" className="w-5 h-5" />
                    </a>
                  )}
                  {p.devpost && (
                    <a
                      href={p.devpost}
                      target="_blank"
                      rel="noreferrer"
                      title="Devpost"
                    >
                      <img
                        src={icon.devpost}
                        alt="Devpost"
                        className="w-5 h-5"
                      />
                    </a>
                  )}
                </div>

                <div className="mt-4 text-sm">
                  <div className="font-semibold mb-2">Built with:</div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {p.builtWith.map((tech) => (
                      <div key={tech} className="relative pl-4 leading-7">
                        <span className="absolute left-0">•</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-12 text-sm text-neutral-700 flex items-center justify-center gap-2">
          <span>...and many more on</span>
          <a
            href="https://github.com/balebbae"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="inline-flex items-center"
          >
            <img src={icon.github} alt="GitHub" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
