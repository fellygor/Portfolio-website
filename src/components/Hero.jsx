import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fellygor",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felista-gor/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center justify-center bg-lightbg dark:bg-darkbg"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          {/* Location */}
          <div className="inline-flex items-center gap-2 mb-6 text-sm text-text-muted dark:text-gray-400">
            <MapPin
              size={15}
              aria-hidden="true"
              className="text-primary"
            />
            <span>Nairobi, Kenya · Open to remote</span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-text-main dark:text-white"
          >
            Hi, I'm{" "}
            <span className="text-primary">Felista Gor</span>
          </h1>

          {/* Professional title */}
          <p className="mt-5 text-xl md:text-2xl font-semibold text-text-muted dark:text-gray-300">
            Software Developer
          </p>

          {/* Introduction */}
          <p className="mt-6 text-base md:text-lg leading-relaxed text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
            I build responsive, accessible web interfaces with React,
            TypeScript, and Tailwind CSS — turning ideas and designs into
            practical, user-friendly products.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="
                bg-primary text-white
                px-6 py-3 rounded-xl
                shadow-md
                inline-flex items-center gap-2
                transition-all duration-200
                hover:shadow-lg hover:-translate-y-0.5
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-primary focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-darkbg
              "
            >
              <span>View My Work</span>
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>

            <a
              href="/Felista Awuor Gor_CV.pdf"
              download="Felista Awuor Gor_CV.pdf"
              className="
                border-2 border-primary text-primary
                px-6 py-3 rounded-xl
                inline-flex items-center gap-2
                transition-all duration-200
                hover:bg-primary hover:text-white
                hover:-translate-y-0.5
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-primary focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-darkbg
              "
            >
              <Download
                size={18}
                aria-hidden="true"
              />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social links */}
          <nav
            aria-label="Social and contact links"
            className="mt-8 flex justify-center gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  className="
                    flex items-center justify-center
                    h-10 w-10 rounded-full
                    border border-border-light
                    dark:border-white/10
                    text-text-muted dark:text-gray-400
                    transition-all duration-200
                    hover:text-primary
                    hover:border-primary/40
                    hover:-translate-y-0.5
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-primary
                  "
                >
                  <Icon
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Availability */}
          <p className="mt-8 text-xs text-text-muted dark:text-gray-500">
            Open to software development opportunities and collaborative
            projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}