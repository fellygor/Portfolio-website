import AceraImg from '../assets/Acera Business Website.png'
import BookImg from '../assets/Bookhaven.PNG'
import TaskFlow from '../assets/Taskflow-app.png'
import CryptoImg from '../assets/Crypto.png';

export const projects = [

  {
    title: "Taskflow App",
    description:
      "TaskFlow is a modern, responsive task management dashboard built with React and Tailwind CSS. It features secure authentication via Firebase, a sleek Dark Mode, and a smooth user experience with custom loading states and notifications.",
    tech: ["React, TailwindCSS", "Firebase(Authentication)", "React Context API (AuthContext, ThemeContext)"],
    features: [
      "Secure Authentication powered by Firebase Auth.",
      "Real-time Task Management: Create, complete, and delete tasks with instant UI updates."
    ],
    live: "https://taskflow-nu-nine.vercel.app/",
    github: "https://github.com/fellygor/Taskflow",
    image: TaskFlow,
  },
  {
    title: "Cryptocurrency dashboard",
    description:
    "A cryptocurrency market tracker featuring a React frontend, interactive Chart.js visualizations, and a responsive Tailwind CSS design. Built to master production-grade API integrations and asynchronous data handling.",
    features:[
      "Real-time prices, market cap, and 24h change for the top cryptocurrencies, with search and currency switching (USD/EUR/JPY)",
"Interactive historical price charts (24h/7D/30D/1Y) via Chart.js",
"Dark mode with system-preference detection and persistence",
"Fully responsive layout, including an off-canvas mobile navigation drawer", ""
    ],
    tech:["React", "Vite", "Tailwind CSS", "Chart.js,"], 
    live: "https://crypto-dashboard.vercel.app/",
    github: "https://github.com/fellygor/crypto-dashboard",
    image: CryptoImg,
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