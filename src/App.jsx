import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

// Import images
import bankImage from "../public/Bankimage.png";
import ecommerceImage from "../public/Ecommerce.png";
import clubsImage from "../public/Clubsimage.png";
import uniFilesImage from "../public/UniFiles.png";
import profileImage from "../public/Me.jpg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      githubUrl:"https://github.com/Abdellah-saim-mamoune1/Nova",
      imageurl: bankImage,
      title: "Banking App",
      description:
        "A secure full-stack banking system built with .NET Core, React, and SQL for account management, transactions, and authentication.",
    },
    {
      githubUrl:"https://github.com/Abdellah-saim-mamoune1/Trezo_Books",
      imageurl: ecommerceImage,
      title: "Books E-Commerce",
      description:
        "An online bookstore with cart, search, and checkout features — built using React, Redux, and ASP.NET API.",
    },
    {
      githubUrl:"https://github.com/Abdellah-saim-mamoune1/Clubs_Management",
      imageurl: clubsImage,
      title: "Clubs Management",
      description:
        "A web app to manage university clubs, members, and events with an intuitive admin dashboard.",
    },
    {
      githubUrl:"https://github.com/Abdellah-saim-mamoune1/",
      imageurl: uniFilesImage,
      title: "University Files Sharing",
      description:
        "A file-sharing platform for students to upload, organize, and access academic materials securely.",
    },
  ];

  const education = [
    {
      title: "Bachelor’s Degree in Computer Science",
      institution: "University of Tlemcen, Algeria",
      years: "2024 — Present",
      description:
        "Studying computer science with a focus on software engineering, algorithms, and system design.",
    },
  ];

  return (
    <div className="app">
      {/* 🌐 Navbar */}
      <nav className="navbar">
        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      {/* 🧠 Hero Section */}
      <section className="hero">
        <motion.img
          src={profileImage}
          alt="Abdellah Saim Mamoune"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Abdellah Saim Mamoune
        </motion.h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <div className="hero-links">
          <a
            href="https://github.com/Abdellah-saim-mamoune1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:abdellahsaimmamoune1@gmail.com">Email</a>
        </div>
      </section>

      {/* 📖 About Section */}
      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>
          I’m a passionate developer who loves building clean, efficient, and
          creative solutions. With a strong background in .NET and React, I
          focus on crafting full-stack applications that combine performance and
          elegance.
        </p>
      </section>

      {/* ⚙️ Skills Section */}
      <section id="skills" className="section skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "C#",
            "C++",
            "C",
            ".NET",
            "React",
            "Vue",
            "SQL Server",
            "Firebase",
            "Azure",
            "Git",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="skill-item"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎓 Education Section */}
      <section id="education" className="section education">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <motion.div
              key={edu.title}
              className="education-card"
              whileHover={{ scale: 1.03 }}
            >
              <h3>{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <p className="edu-years">{edu.years}</p>
              <p>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧩 Projects Section */}
      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
       {projects.map((p) => (
  <a
    key={p.title}
    href={p.githubUrl}   // الرابط لمشروع GitHub
    target="_blank"      // يفتح في تبويب جديد
    rel="noopener noreferrer"
    className="project-card hover:scale-105 transition-transform duration-300"
  >
    <img src={p.imageurl} alt={p.title} className="project-image" />
    <h3 className="mt-3">{p.title}</h3>
    <p className="mt-2 text-gray-300">{p.description}</p>
  </a>
))}

        </div>
      </section>

      {/* 💌 Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Interested in working together or have a question?</p>
        <a
          href="mailto:abdellahsaimmamoune1@gmail.com"
          className="contact-btn"
        >
          Email Me
        </a>
      </section>

      {/* ⚡ Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Abdellah Saim Mamoune. All rights reserved.
      </footer>
    </div>
  );
}
