"use client";
import React from "react";
import { motion } from "motion/react";

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F1ECE4] text-neutral-900">
      <div className="mx-auto max-w-[1040px] px-16 py-12">
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
          className="mt-4 font-serif text-4xl md:text-6xl leading-none"
        >
          EXPERIENCES
        </motion.h1>

        {/* Main Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-[28px]">
          {/* Homebase - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-6"
          >
            <div className="font-serif text-3xl md:text-3xl">Homebase</div>
            <div className="italic text-base text-neutral-600 mt-2">
              Software Engineer Intern · San Francisco, CA
            </div>
            <div className="text-base text-neutral-700 mt-1">
              Sep. 2025 - Dec. 2025
            </div>
            <ul className="mt-5 list-none space-y-2 md:max-w-[34rem]">
              <li className="text-base leading-7">
                Built and deployed{" "}
                <a
                  href="https://www.joinhomebase.com/tools/ai-tools-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 underline decoration-neutral-400 hover:decoration-neutral-900 transition-colors"
                >
                  5 AI marketing tools
                </a>{" "}
                using React TS, Vite, and Supabase on Netlify.
              </li>
              <li className="text-base leading-7">
                Developed AI sales training platform with OpenAI real-time voice and Salesforce-integrated follow up emails generation for 100+ daily opportunities.
              </li>
              <li className="text-base leading-7">
                Created AI SQL Assistant to auto-generate financial reports with PostgreSQL queries across 50+ Redshift tables.
              </li>
              <li className="text-base leading-7">
                Built post-call automation with LLM-powered email generation and BigSpin AI feedback loops.
              </li>
              <li className="text-base leading-7">
                Engineered Claude Code subagents that refactored 129 files and created/maintained Homebase&apos;s Claude Code Plugin Marketplace.
              </li>
            </ul>

            {/* Other roles - Below Homebase */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-14"
            >
              <div className="font-serif text-3xl md:text-3xl">OTHER</div>
              <ul className="mt-3 list-none space-y-1 text-base">
                <li>Umai Sushi - Server</li>
                <li>TeaLatte Bar - Barista</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Stacked Roles */}
          <div className="md:col-span-6 space-y-14">
            {/* Capital One */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="md:text-right"
            >
              <div className="font-serif text-3xl md:text-3xl">Capital One</div>
              <div className="italic text-base text-neutral-600 mt-2">
                Software Engineer Intern · Plano, TX
              </div>
              <div className="text-base text-neutral-700 mt-1">
                Jun. 2025 - Aug. 2025
              </div>
              <ul className="mt-5 list-none space-y-2 md:max-w-[34rem] md:ml-auto">
                <li className="text-base leading-7">
                  Reduced SLI/SLO provisioning time by creating custom Backstage
                  scaffolder action integrated with AWS Lambda templates.
                </li>
              </ul>
            </motion.div>

            {/* Solvticians */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="md:text-right"
            >
              <div className="font-serif text-3xl md:text-3xl">
                Solvticians LLC
              </div>
              <div className="italic text-base text-neutral-600 mt-2">
                Software Engineer Intern · Frisco, TX
              </div>
              <div className="text-base text-neutral-700 mt-1">
                Nov. 2024 - Jun. 2025
              </div>
              <ul className="mt-5 list-none space-y-2 md:max-w-[34rem] md:ml-auto">
                <li className="text-base leading-7">
                  Developed client solutions using .NET Core, React, and
                  TypeScript, reducing API calls by 80% through GraphQL
                  optimization.
                </li>
              </ul>
            </motion.div>

            {/* theCoderSchool */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="md:text-right"
            >
              <div className="font-serif text-3xl md:text-3xl">
                theCoderSchool
              </div>
              <div className="italic text-base text-neutral-600 mt-2">
                Code Instructor · Frisco, TX
              </div>
              <div className="text-base text-neutral-700 mt-1">
                Jan. 2024 - May 2024
              </div>
              <ul className="mt-5 list-none space-y-2 md:max-w-[34rem] md:ml-auto">
                <li className="text-base leading-7">
                  Taught coding and game design in Python and Scratch to
                  students aged 7+, mentoring in problem-solving and debugging.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
