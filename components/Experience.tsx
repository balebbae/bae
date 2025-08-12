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

        {/* Row 1 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-[28px]">
          {/* Homebase */}
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
            <div className="mt-3 text-sm font-semibold tracking-wide">
              INCOMING...
            </div>
          </motion.div>

          {/* Capital One */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="md:col-span-6 md:text-right"
          >
            <div className="font-serif text-3xl md:text-3xl">Captial One</div>
            <div className="italic text-base text-neutral-600 mt-2">
              Software Engineer Intern · Plano, TX
            </div>
            <div className="text-base text-neutral-700 mt-1">
              Jun. 2025 - Aug. 2025
            </div>
            <ul className="mt-5 list-none space-y-2 md:max-w-[34rem] md:ml-auto">
              <li className="text-base leading-7">
                Reduced manual Service Level Indicator (SLI) and Service Level
                Objective (SLO) provisioning time on Capital One’s Internal
                Developer Platform by creating a custom Backstage scaffolder
                action integrated as a step in an AWS Lambda template to onboard
                each component with default SLIs and SLOs.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-[28px]">
          {/* Solvticians */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-6"
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
                Developed and maintained professional client solutions using
                .NET Core, ReactJS, and TypeScript, implementing complex
                business logic services and optimizing performance by reducing
                API calls per view by 80% through preloaded GraphQL queries.
              </li>
            </ul>
          </motion.div>

          {/* theCoderSchool */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="md:col-span-6 md:text-right"
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
                Created lesson plans and taught coding and game design to
                students aged seven and up, delivering projects in Python and
                Scratch while mentoring them in problem solving, debugging, and
                presenting their work.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Other roles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16"
        >
          <div className="font-serif text-3xl md:text-4xl">OTHER</div>
          <div className="mt-3 space-y-1 italic text-base">
            <div>Umai Sushi - Server</div>
            <div>TeaLatte Bar - Barista</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
