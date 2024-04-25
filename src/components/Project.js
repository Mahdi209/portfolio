import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import myPhoto from "../assets/htmlProject.png";
import todo from "../assets/todo.png";
import food from "../assets/food.png";
import pokemon from "../assets/pokemon.png";

export default function Project() {
  return (
    <div id="project-container">
      <div id="right">
        <h1 className="project-title">
          My <span>Project</span>
        </h1>
        <p className="description" id="project-description">
          Greetings, fellow digital explorers! I am Mohammed Mahdi, a passionate
          and innovative developer dedicated to crafting immersive digital
          experiences. Welcome to my online abode
          <br />
          <br />
          <br />
          Greetings, fellow digital explorers! I am Mohammed Mahdi, a passionate
          and innovative developer
        </p>
        <button id="read-me">Read More</button>
      </div>

      <div id="left">
        <div className="project" id="project1">
          <h1 className="sub-project-title">Todo Project</h1>
          <img className="img" src={todo} alt="" />
          <div className="links">
            <a
              className="web-link"
              href="https://github.com/Mahdi209/react-todo-starting-point"
            >
              <FaGithub size={"20"} />
            </a>
            <a
              className="web-link"
              href="https://todoapp-myproject.netlify.app/"
            >
              <SiNetlify size={"20"} />
            </a>
          </div>
        </div>
        <div className="project" id="project2">
          <h1 className="sub-project-title">Pokemon Project</h1>
          <img className="img" src={pokemon} alt="" />
          <div className="links">
            <a
              className="web-link"
              href="https://github.com/Mahdi209/JS-Pokemon_API_Project"
            >
              <FaGithub size={"20"} />
            </a>
            <a
              className="web-link"
              href="https://pokemon-card-task.netlify.app/"
            >
              <SiNetlify size={"20"} />
            </a>
          </div>
        </div>

        <div className="project" id="project3">
          <h1 className="sub-project-title">Food Project</h1>
          <img className="img" src={food} alt="" />
          <div className="links">
            <a
              className="web-link"
              href="https://github.com/Mahdi209/Food-project"
            >
              <FaGithub size={"40"} />
            </a>
            <a className="web-link" href="https://main--toto-web.netlify.app/">
              <SiNetlify size={"20"} />
            </a>
          </div>
        </div>

        <div className="project" id="project4">
          <h1 className="sub-project-title">Shop project</h1>
          <img className="img" src={myPhoto} alt="" />
          <div className="links">
            <a
              href="https://github.com/Mahdi209/shop-Project"
              className="web-link"
            >
              <FaGithub size={"20"} />
            </a>
            <a
              href="https://bestshop-project.netlify.app/"
              className="web-link"
            >
              <SiNetlify size={"20"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
