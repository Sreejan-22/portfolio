import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import "./ProjectCard.css";

const ProjectCard = ({ name, description, live, source }) => {
  return (
    <div className="project-card">
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="project-links">
        <a href={live} target="_blank" rel="noreferrer">
          <button>
            <BiLinkExternal />
            &nbsp;View Live
          </button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href={source} target="_blank" rel="noreferrer">
          <button>
            <AiOutlineGithub />
            &nbsp; View Source
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
