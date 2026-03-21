import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="bg-lightbg dark:bg-darkbg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary text-center md:text-left">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -5 }}
              className="bg-lightbg dark:bg-darkbg rounded-2xl overflow-hidden shadow-sm border border-border-light flex flex-col"
            >
              {/* IMAGE */}
              {proj.image ? (
                <img
                  src={proj.image}
                  alt={`Screenshot of ${proj.title}`}
                  className="aspect-video object-contain"
                />
              ) : (
                <div className="aspect-video flex items-center justify-center text-sm text-gray-400">
                  No Image Available
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                {/* TITLE */}
                <h3 className="text-xl text-primary font-bold mb-2">
                  {proj.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-text-muted text-sm mb-4">
                  {proj.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-primary bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* FEATURES */}
                <ul className="text-sm text-text-muted mb-4 space-y-1 flex-1">
                  {proj.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>

                {/* LINKS */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted font-bold text-sm hover:underline hover:scaleX(1.4)"
                  >
                    Live Project
                  </a>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted font-bold text-sm hover:underline"
                  >
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