import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-lightbg dark:bg-darkbg">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          {/* Name & Title */}
          <h1 className="text-4xl text-text-muted md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-primary">Felista Gor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Junior Frontend Developer
          </p>
          
          <p className="text-base md:text-lg text-text-muted dark:text-gray-400 max-w-xl mx-auto mb-10">
            Passionate about building inclusive digital experiences that nurture knowledge and accessibility.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            <a
              href="#projects"
              className="bg-primary hover:bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition inline-flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="../../documents/Felista Awuor Gor_Frontend Dev_CV.pdf"
              download="Felista Awuor Gor_Frontend Dev_CV.pdf"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl transition inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Contact & Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            {/* Email Contact */}
            <a
              href="mailto:fellygor@gmail.com"
              className="inline-flex items-center gap-2 text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition group"
            >
              <Mail size={18} className="group-hover:scale-110 transition" />
              <span>fellygor@gmail.com</span>
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gray-300 dark:bg-gray-700"></div>
              <span className="text-sm text-text-muted dark:text-gray-500">Connect with me</span>
              <div className="w-12 h-px bg-gray-300 dark:bg-gray-700"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://github.com/fellygor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/felista-gor-6b52ba157"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}