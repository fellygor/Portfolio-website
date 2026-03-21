import { useContext, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ThemeContext } from "../ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    console.log("Current state:" , dark);
    setDark(!dark);
    console.log("New state requested:", !dark);
  }
  const navLinks = ["Skills", "Projects", "Contact"];

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-lightbg/30 dark:bg-darkbg/80 border-b border-border-light dark:border-slate-800 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a className="text-xl font-bold text-primary hover:opacity-80 transition-opacity" href="#">
          Felista Gor
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex gap-8 font-medium text-text-main dark:text-gray-200">
            {navLinks.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-text-main dark:text-primary hover:ring-2 ring-primary transition-all"
            aria-label="Toggle Theme"
          >
            {dark ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button 
            className="md:hidden p-2 text-text-main dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-surface dark:bg-darkbg border-b border-border-light dark:border-slate-800 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 font-medium text-text-main dark:text-gray-200">
              {navLinks.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setOpen(false)}
                    className="block w-full hover:text-primary py-2 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}