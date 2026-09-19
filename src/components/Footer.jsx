
import { Mail, Github, Linkedin, } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-lightbg dark:bg-darkbg text-text-main dark:text-gray-600 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl text-primary font-bold mb-4">Let's Connect</h2>
          <div className="flex justify-center gap-6 text-2xl mb-4">
            <a
              href="https://github.com/fellygor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/felista-gor-6b52ba157"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:fellygor@gmail.com"
              className="hover:text-primary"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Felista Gor.</p>
        </div>
      </footer>
  );
}
