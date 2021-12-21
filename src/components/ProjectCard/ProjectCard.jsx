import "./ProjectCard.css";

const ProjectCard = ({ name, description, live, source }) => {
  return (
    <div className="project-card">
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="project-links">
        <a href={live} target="_blank" rel="noreferrer">
          <button>View Live</button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href={source} target="_blank" rel="noreferrer">
          <button>View Source</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
