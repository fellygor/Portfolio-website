import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Check } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-lightbg dark:bg-darkbg py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
         {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Selected Projects
          </p>

          <h2
            id="projects-heading"
            className="text-4xl font-bold tracking-tight text-text-main dark:text-white md:text-5xl"
          >
            Projects I've built
          </h2>

          <p className="mt-5 leading-7 text-text-muted dark:text-gray-300">
            A selection of projects focused on responsive interfaces,
            API integration, accessibility, and practical user experiences.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((proj, i) => (
            <motion.article
              key={proj.title || i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: Math.min(i * 0.08, 0.24),
                ease: "easeOut",
              }}
              aria-labelledby={`project-title-${i}`}
              className="
                group flex flex-col overflow-hidden
                rounded-2xl
                bg-white/60 dark:bg-white/[0.03]
                border border-border-light dark:border-white/10
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-primary/30
              "
            >
              {/* Project image */}
              <div className="relative overflow-hidden bg-gray-100 dark:bg-white/5">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={`Screenshot of ${proj.title}`}
                    loading={i > 1 ? "lazy" : "eager"}
                    className="
                      w-full aspect-video object-contain
                      transition-transform duration-500
                      group-hover:scale-[1.02]
                    "
                  />
                ) : (
                  <div
                    className="
                      w-full aspect-video
                      flex items-center justify-center
                      text-sm text-text-muted dark:text-gray-500
                    "
                  >
                    No image available
                  </div>
                )}

               
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                {/* Title */}
                <h3
                  id={`project-title-${i}`}
                  className="
                    text-xl md:text-2xl
                    font-bold
                    text-text-main dark:text-white
                  "
                >
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-text-muted dark:text-gray-400">
                  {proj.description}
                </p>

                {/* Technologies */}
                <div
                  className="flex flex-wrap gap-2 mt-5"
                  aria-label="Technologies used"
                >
                  {proj.tech.map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="
                        px-2.5 py-1
                        rounded-md
                        bg-primary/10
                        text-primary
                        text-xs font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2.5 flex-1">
                  {proj.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="
                        flex items-start gap-2.5
                        text-sm leading-5
                        text-text-muted dark:text-gray-400
                      "
                    >
                      <span
                        className="
                          mt-0.5 flex h-4 w-4 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-primary/10
                          text-primary
                        "
                        aria-hidden="true"
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex items-center gap-5 mt-7 pt-5 border-t border-border-light dark:border-white/10">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live ${proj.title} project`}
                    className="
                      inline-flex items-center gap-1.5
                      text-sm font-semibold
                      text-primary
                      transition-colors duration-200
                      hover:text-primary/80
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary
                      focus-visible:ring-offset-2
                      dark:focus-visible:ring-offset-darkbg
                    "
                  >
                    Live Project
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${proj.title} source code on GitHub`}
                    className="
                      inline-flex items-center gap-1.5
                      text-sm font-semibold
                      text-text-muted dark:text-gray-400
                      transition-colors duration-200
                      hover:text-text-main dark:hover:text-white
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary
                      focus-visible:ring-offset-2
                      dark:focus-visible:ring-offset-darkbg
                    "
                  >
                    <Github size={16} aria-hidden="true" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}