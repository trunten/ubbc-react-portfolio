import Project from "../Project";
import projects from "../../projects.json";

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      {projects.map(project => <Project project={project}/>)}
    </div>
  );
}