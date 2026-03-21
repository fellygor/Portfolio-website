import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-lightbg dark:bg-darkbg ">
      
      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl text-text-main dark:text-gray-300 md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-primary">Felista Gor</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 max-w-xl">
            A Junior Frontend Developer passionate about building inclusive digital experiences 
            that nurture knowledge and accessibility.
          </p>
      
           <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-primary hover:bg-emerald-600 text-surface px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            download
            className="border border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition"
          >
            Download CV
          </a>
        </div>
        </motion.div>
      </header>
      
    </section>
    
  );
}
