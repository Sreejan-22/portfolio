import programming from "./assets/programming.svg";
import "./App.css";

function App() {
  return (
    <div className="app-content">
      <nav className="navbar">
        <h1 className="logo" onClick={() => window.location.reload()}>
          Sreejan
        </h1>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className="hero-section">
        <div className="hero-left">
          <h1>Hey, I'm Sreejan! 👋</h1>
          <br />
          <h3>
            I am a software developer from India. I am enthusiastic about
            building impactful products. I am into full stack web development
            with specialization in frontend.
          </h3>
          <br />
          <br />
          <br />
          <div className="hero-links">
            <a
              href="https://github.com/Sreejan-22"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={programming} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
