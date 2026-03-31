import AceraImg from '../assets/Acera Business Website.png'
import PortfolioImg from '../assets/Portfolio.PNG'
import BookImg from '../assets/Bookhaven.PNG'
import TaskFlow from '../assets/TaskFlow.PNG'

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built to showcase my projects, skills, and experience with smooth animations and a clean UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    features: [
      "Responsive design for mobile, tablet, and desktop",
      "Dark and Light mode",
      "Smooth animations using Framer Motion",
      "Project showcase with live demo and GitHub links",
      "Clean and accessible UI design",
      "Optimized performance and fast loading"
    ],
    live: "https://portfolio-website-sigma-jade-97.vercel.app/",
    github: "https://github.com/fellygor/Portfolio-website.git",
    image: PortfolioImg,
  },
  {
    title: "Taskflow App",
    description:
      "TaskFlow is a modern, responsive task management dashboard built with React and Tailwind CSS. It features secure authentication via Firebase, a sleek Dark Mode, and a smooth user experience with custom loading states and notifications.",
    tech: ["Frontend: React, TailwindCSS", "Backend/Auth: Firebase(Authentication)", "State Management: React Context API (AuthContext, ThemeContext)"],
    features: [
      "Secure Authentication powered by Firebase Auth.",
      "Dynamic Dark Mode: Persists user preference using Local Storage and prefers-color-scheme.",
      "Real-time Task Management: Create, complete, and delete tasks with instant UI updates."
    ],
    live: "https://taskflow-nu-nine.vercel.app/",
    github: "https://github.com/fellygor/Taskflow",
    image: TaskFlow,
  },
  {
    title: "Book Haven",
    description:
      "A book discovery web app that integrates with the Google Books API, allowing users to search and explore books in real time.",
    tech: ["React", "Tailwind CSS", "Google Books API"],
    features: [
      "Search books in real-time using Google Books API",
      "Display book details (title, author, description, cover)",
      "Dynamic rendering of search results",
      "Responsive and user-friendly interface",
      "Error handling for empty or failed searches"
    ],
    live: "https://book-haven-sigma.vercel.app/",
    github: "https://github.com/fellygor/Book-Haven",
    image: BookImg,
  },
  {
    title: "Acera Business Website",
    description:
      "A professional business landing page designed for a tech company to showcase services and improve brand visibility.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Modern landing page design with clear call-to-actions",
      "Services section highlighting business offerings",
      "Fully responsive layout",
      "Contact section for user inquiries",
      "Clean and structured component-based architecture"
    ],
    live: "https://acera-business-website.vercel.app/",
    github: "https://github.com/fellygor/ACERA-Business-Website",
    image: AceraImg,
  },
 
];