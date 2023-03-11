import Project from "../Project";
import projects from "../../projects.json";

export default function Projects() {
  return (
    <div className="container-fluid" id="projects">
      <h2 className="display-4 text-center pt-5 pb-3">Projects</h2>
      <div className="row">
        {projects.map((project, index) => <Project key={index} project={project}/>)}
      </div>
    </div>
  );
}