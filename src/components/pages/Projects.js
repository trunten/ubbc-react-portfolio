import Project from "../Project";
import projects from "../../projects.json";

export default function Projects() {
  return (
    <div className="container-fluid mb-5" id="projects">
      <h2 className="display-4 text-center my-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => <Project key={index} project={project}/>)}
      </div>
    </div>
  );
}