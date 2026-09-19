import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiFirebase,
  SiVite,
  SiSqlite,
} from "react-icons/si";
import { Globe, Database, Code2, Workflow } from "lucide-react";

const techCategories = [
  {
    number: "01",
    icon: Code2,
    title: "Core Development",
    description: "The technologies I use to build applications.",
    skills: [
      { icon: SiJavascript, name: "JavaScript (ES6+)" },
      { icon: FaReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    number: "02",
    icon: Code2,
    title: "UI Engineering",
    description: "Building responsive and accessible interfaces.",
    skills: [
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS3" },
      { icon: FaBootstrap, name: "Bootstrap" },
      { icon: SiFramer, name: "Framer Motion" },
    ],
  },
  {
    number: "03",
    icon: Database,
    title: "APIs & Data",
    description: "Connecting interfaces to data and services.",
    skills: [
      { icon: Globe, name: "REST APIs" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiSqlite, name: "SQL" },
      { icon: SiFirebase, name: "Firebase" },
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Tools & Workflow",
    description: "Tools I use to collaborate and ship reliably.",
    skills: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiVite, name: "Vite" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="stack"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden bg-lightbg/20 py-24 transition-colors duration-300 dark:bg-darkbg"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tools & Technologies
          </p>

          <h2
            id="skills-heading"
            className="text-4xl font-bold tracking-tight text-text-main dark:text-white md:text-5xl"
          >
            My Tech Stack
          </h2>

          <p className="mt-5 leading-7 text-text-muted dark:text-gray-300">
            Technologies I use to turn ideas and designs into responsive,
            accessible and reliable web applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {techCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: catIndex * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-border-light
                  bg-lightbg/80 p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-lg
                  focus-within:border-primary/50
                  dark:border-white/10
                  dark:bg-white/[0.03]
                "
              >
                {/* Decorative number */}
                <span
                  aria-hidden="true"
                  className="
                    absolute right-5 top-4
                    text-4xl font-bold
                    text-text-main/[0.04]
                    transition-colors duration-300
                    group-hover:text-primary/10
                    dark:text-white/[0.04]
                  "
                >
                  {category.number}
                </span>

                {/* Category header */}
                <div className="mb-6 flex items-start gap-4">
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-xl bg-primary/10
                      text-primary
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  >
                    <CategoryIcon
                      size={21}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-main dark:text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-text-muted dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <li key={skill.name}>
                        <div
                          className="
                            inline-flex items-center gap-2
                            rounded-lg
                            border border-border-light
                            bg-white/60
                            px-3 py-2
                            text-sm font-medium
                            text-text-main
                            transition-all duration-200
                            hover:border-primary/30
                            hover:bg-primary/5
                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-gray-200
                            dark:hover:bg-primary/10
                          "
                        >
                          <Icon
                            className="shrink-0 text-base text-primary"
                            aria-hidden="true"
                          />

                          <span>{skill.name}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-6 text-text-muted dark:text-gray-400">
            I focus on choosing the right tools for the problem rather than
            using technology for its own sake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;