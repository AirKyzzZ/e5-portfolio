"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Database,
  AlertCircle,
  Globe,
  LayoutGrid,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/Glowing/glowing-effect";
import { competences, type Competence } from "@/data/competences";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="h-4 w-4 text-black dark:text-neutral-400" />,
  AlertCircle: (
    <AlertCircle className="h-4 w-4 text-black dark:text-neutral-400" />
  ),
  Globe: <Globe className="h-4 w-4 text-black dark:text-neutral-400" />,
  LayoutGrid: (
    <LayoutGrid className="h-4 w-4 text-black dark:text-neutral-400" />
  ),
  Rocket: <Rocket className="h-4 w-4 text-black dark:text-neutral-400" />,
  TrendingUp: (
    <TrendingUp className="h-4 w-4 text-black dark:text-neutral-400" />
  ),
};

const projectTitle = (id: string) =>
  projects.find((p) => p.id === id)?.title ?? id;

const GridItem = ({
  competence,
  index,
}: {
  competence: Competence;
  index: number;
}) => {
  const coveredBy = Array.from(
    new Set(competence.realisations.map((r) => projectTitle(r.projectId)))
  );

  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col gap-4 overflow-hidden rounded-xl p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="flex items-center justify-between">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {iconMap[competence.icon]}
            </div>
            <span
              className={`text-xs font-mono font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${competence.color} text-white`}
            >
              {competence.code}
            </span>
          </div>

          <h3 className="-tracking-4 font-sans text-xl font-semibold text-balance text-black dark:text-white">
            {competence.title}
          </h3>

          <ul className="space-y-1.5">
            {competence.officialBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 font-sans text-sm leading-snug text-black/80 dark:text-neutral-300"
              >
                <span
                  className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${competence.color}`}
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t border-white/10 pt-3">
            <span className="mr-1 text-[10px] font-mono uppercase tracking-wider text-neutral-500">
              Prouvé par
            </span>
            {coveredBy.map((title) => (
              <span
                key={title}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-neutral-300"
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export function CompetencesBloc1() {
  return (
    <section className="w-full px-4 py-16 md:px-8 md:py-24">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">
          Épreuve E5 · BTS SIO SLAM
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Compétences{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Bloc 1
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
          Les 6 compétences officielles du Bloc 1 évaluées lors de l&apos;épreuve
          E5 « Support et mise à disposition de services informatiques »,
          détaillées selon le référentiel et couvertes par mes réalisations
          professionnelles.
        </p>
      </motion.div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {competences.map((competence, index) => (
          <GridItem key={competence.id} competence={competence} index={index} />
        ))}
      </ul>
    </section>
  );
}
