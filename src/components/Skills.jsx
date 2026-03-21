import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: FaReact, name: "React" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: FaGithub, name: "GitHub" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-lightbg/20 dark:bg-darkbg transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Technical Stack
          </h2>
          <p className="mt-4 text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
            The tools and technologies I use to build scalable,
            accessible and high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="group relative flex flex-col items-center p-8 rounded-2xl 
                bg-lightbg dark:bg-darkbg/5 backdrop-blur-md 
                border border-border-light dark:border-white/10
                hover:border-primary/40 hover:shadow-xl 
                transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon aria-hidden="true" />
                </div>

                {/* Label */}
                 <h3 className="font-semibold text-text-main dark:text-white text-sm tracking-wide group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>

                <div className="absolute inset-0 rounded-2xl bg-accent/10 dark:bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;