import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-lightbg dark:bg-darkbg text-text-main dark:text-primary text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl text-primary font-bold mb-4">Let's Connect</h2>
          <p className="mb-8 text-gray-400">fellygor@gmail.com</p>
          <div className="flex justify-center gap-6 text-2xl mb-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="hover:text-primary"
              aria-label="Email"
            >
              <HiMail />
            </a>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Felista Gor.</p>
        </div>
      </footer>
  );
}
