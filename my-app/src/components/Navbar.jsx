import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);
  

  const navItems = [
    { id: "#home", label: "✨ Home" },
    { id: "#about", label: "💖 About" },
    { id: "#projects", label: "🎀 Projects" },
    { id: "#contact", label: "🦄 Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 bg-color backdrop-blur-lg text-pink-800 py-4 px-6 shadow-2xl z-50 border-b border-pink-300 rounded-b-3xl">
      <ul className="flex justify-center gap-10 font-bold tracking-wider text-lg drop-shadow-md">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.id}
              className={`relative group flex items-center gap-1 transition duration-300 ease-in-out sparkle-text ${
                activeSection === item.id
                  ? "text-fuchsia-600"
                  : "hover:text-fuchsia-600"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-1 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? "w-full bg-black" : "w-0 bg-black group-hover:w-full"
                }`}
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
