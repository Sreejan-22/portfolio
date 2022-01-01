import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectData from "../../data/projectData";
import skills from "../../data/skills";
import programming from "../../assets/programming.svg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const setActiveFalse = () => setActive(false);

  return (
    <>
      <div className="app-content">
        <nav className="navbar">
          <h1
            className="logo"
            onClick={() => {
              navigate("/");
              window.scroll({ top: 0, left: 0 });
            }}
          >
            Sreejan
          </h1>
          <div className={`nav-links ${active ? "active" : ""}`}>
            <a href="#projects" onClick={setActiveFalse}>
              Projects
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#skills" onClick={setActiveFalse}>
              Skills
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://sreejan.hashnode.dev">Blog</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#contact" onClick={setActiveFalse}>
              Contact
            </a>
          </div>
          <span className="hamburger">
            {active ? (
              <VscChromeClose onClick={() => setActive(false)} />
            ) : (
              <FiMenu onClick={() => setActive(true)} />
            )}
          </span>
        </nav>
        <section className="hero-section">
          <div className="hero-left">
            <h1>Hey, I'm Sreejan! 👋</h1>
            <br />
            <h3>
              A full stack developer specializing in frontend
              <br />
              Enthusiastic about building impactful products
            </h3>
            <br />
            <br />
            <br />
            <div className="hero-links">
              <a href="#contact">
                <button>Let's talk</button>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#contact" style={{ display: "none" }}>
                <button>View Resume</button>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <img src={programming} alt="" />
          </div>
        </section>
        <section className="project-section" id="projects">
          <h1 className="section-heading">Projects</h1>
          <div className="project-container">
            {projectData.map((_) => (
              <ProjectCard
                name={_.name}
                description={_.description}
                live={_.live}
                source={_.source}
                key={_.id}
              />
            ))}
          </div>
          <br />
          <br />
          <br />
        </section>
        <section className="skills-section" id="skills">
          <h1 className="section-heading">Skills</h1>
          <div className="skills">
            {skills.map((item) => (
              <div className="skill" key={item.id}>
                <img src={item.url} alt="" />
                <br />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
        </section>
        <section className="contact-section" id="contact">
          <h1 className="section-heading">Contact</h1>
          <br />
          <br />
          <br />
          <div className="contact-links">
            <a
              href="https://github.com/Sreejan-22"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://linkedin.com/in/sreejanchaudhury"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/sreejan_ch"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </div>
        </section>
      </div>
      <footer>
        <h4>
          Built by{" "}
          <a
            href="https://github.com/Sreejan-22"
            target="_blank"
            rel="noreferrer"
          >
            Sreejan Chaudhury
          </a>{" "}
          &copy; {new Date().getFullYear()}{" "}
        </h4>
      </footer>
    </>
  );
};

export default Home;
