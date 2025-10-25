import { useState } from "react";
import { motion } from "framer-motion";
//import "./app.css";
// Import images
import bankImage from "./Bankimage.png";
import ecommerceImage from "./Ecommerce.png";
import clubsImage from "./Clubsimage.png";
import uniFilesImage from "./UniFiles.png";
import profileImage from "./Me.jpg";

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
  <style>{`
        html, body, #root {
          height: 100%;
          margin: 0;
          background-color: #0E1117;
          color: #e5e7eb;
          scroll-behavior: smooth;
          font-family: "Poppins", sans-serif;
          overflow-x: hidden;
        }
        a { color: #00e0b8; text-decoration: none; transition: color 0.3s ease; }
        a:hover { color: #7fffd4; }
        .app { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hero img { width: 300px; height: 300px; border-radius: 50%; object-fit: cover; border: 3px solid #00e0b8; margin-bottom: 20px; background-color: #111; transition: transform 0.3s ease; }
        .hero img:hover { transform: scale(1.05); }
        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: radial-gradient(circle at 50% 50%, #121826, #0d1117); color: white; padding: 40px 10px; }
        .hero-title { font-size: 3rem; font-weight: 700; margin-bottom: 10px; }
        .hero-subtitle { font-size: 1.3rem; color: #9ca3af; margin-bottom: 25px; }
        .hero-links a { margin: 0 15px; font-weight: 600; font-size: 1rem; }
        .section { width: 100%; max-width: 1000px; padding: 60px 20px; box-sizing: border-box; }
        .section h2 { color: #00e0b8; font-size: 2.2rem; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1.5px; }
        .about p { color: #cbd5e1; line-height: 1.8; font-size: 1.1rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; margin-top: 20px; }
        .skill-item { background-color: #161b22; border-radius: 10px; padding: 15px; font-weight: 500; transition: all 0.3s ease; }
        .skill-item:hover { background-color: #00e0b8; color: #0d1117; transform: scale(1.08); }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 30px; padding: 40px 10px; justify-content: center; align-items: start; }
        .project-card { background: #1a1a1a; border-radius: 18px; padding: 30px; text-align: left; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; box-sizing: border-box; }
        .project-image { width: 100%; height: auto; max-height: 350px; border-radius: 12px; margin-bottom: 20px; object-fit: contain; background-color: #111; display: block; }
        .project-card:hover { transform: translateY(-8px); box-shadow: 0 0 25px rgba(0, 255, 255, 0.25); }
        .project-card h3 { color: #00e0b8; font-size: 1.4rem; margin-bottom: 10px; }
        .project-card p { color: #cbd5e1; line-height: 1.6; font-size: 1rem; }
        .education-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; margin-top: 25px; }
        .education-card { background-color: #161b22; border-left: 4px solid #00e0b8; border-radius: 12px; padding: 25px; text-align: left; transition: all 0.3s ease; }
        .education-card:hover { background-color: #1f2937; transform: translateY(-5px); }
        .education-card h3 { color: #00e0b8; font-size: 1.3rem; margin-bottom: 10px; }
        .education-card h4 { color: #9ca3af; font-size: 1rem; margin-bottom: 5px; }
        .edu-years { color: #7fffd4; font-size: 0.9rem; margin-bottom: 10px; }
        .education-card p { color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; }
        .contact { background-color: #0b0e12; padding: 60px 20px; }
        .contact p { color: #9ca3af; margin-bottom: 20px; font-size: 1.05rem; }
        .contact-btn { background-color: #00e0b8; color: #0d1117; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 1rem; transition: all 0.3s ease; }
        .contact-btn:hover { background-color: #02bfa2; transform: scale(1.05); }
        .footer { border-top: 1px solid #1f2937; color: #9ca3af; font-size: 0.9rem; padding: 20px; width: 100%; text-align: center; background-color: #0d1117; }
        .navbar { display: flex; justify-content: flex-end; align-items: center; padding: 12px 30px; background-color: #0b0e12; position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid #1f2937; }
        .navbar-links { display: flex; gap: 20px; }
        .navbar-links a { color: #ccc; font-weight: 500; transition: color 0.3s; }
        .navbar-links a:hover { color: #00e0b8; }
        .navbar-toggle { display: none; flex-direction: column; cursor: pointer; gap: 5px; }
        .navbar-toggle span { width: 25px; height: 3px; background-color: #00e0b8; border-radius: 2px; }
        @media (max-width: 768px) {
          .navbar-links { display: none; flex-direction: column; background-color: #0b0e12; position: absolute; top: 60px; right: 0; width: 200px; padding: 15px; border-left: 1px solid #1f2937; }
          .navbar-links.open { display: flex; }
          .navbar-toggle { display: flex; }
          .hero img { width: 220px; height: 220px; }
          .hero-title { font-size: 2.4rem; }
        }
        @media (max-width: 480px) {
          .projects-grid { grid-template-columns: 1fr; gap: 25px; }
          .project-card { padding: 20px; }
          .hero-title { font-size: 2rem; }
        }
        @media (max-width: 380px) {
          .section { padding: 35px 10px; }
          .project-card { padding: 15px; }
          .project-card h3 { font-size: 1rem; }
          .project-card p { font-size: 0.85rem; }
        }
      `}</style>
  
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
