import ProjectCard from "./components/ProjectCard/ProjectCard";
import projectData from "./data/projectData";
import skills from "./data/skills";
import programming from "./assets/programming.svg";
import "./App.css";

function App() {
  return (
    <div className="app-content">
      <nav className="navbar">
        <h1 className="logo" onClick={() => (window.location.href = "/")}>
          Sreejan
        </h1>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#skills">Skills</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className="hero-section">
        <div className="hero-left">
          <h1>Hey, I'm Sreejan! 👋</h1>
          <br />
          <h3>
            I am a full stack web developer specializing in frontend. I am
            enthusiastic about building impactful products.
          </h3>
          <br />
          <br />
          <br />
          <div className="hero-links">
            <a href="#contact">
              <button>Hire Me</button>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#contact">
              <button>View Resume</button>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={programming} alt="" />
        </div>
      </section>
      <section className="project-section" id="projects">
        <h1>Projects</h1>
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
      <section className="skills-section">
        <h1>Skills</h1>
        <div className="skills" id="skills">
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
    </div>
  );
}

export default App;
