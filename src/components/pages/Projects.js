import { useState } from "react";
import Project from "../Project";
import allProjects from "../../projects.json";

export default function Projects() {
  const [projects, setProjects] = useState(allProjects);

  function filterProjects(e, str) {
    e.preventDefault();
    if (str) { document.querySelector("input").value = ""; } else { str = e.target.value.trim(); }
    if (str === "") {
      setProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => {
        const re = new RegExp(str, "ig");
        return project.title.match(re) || project.tags.join(" ").match(re);
      })
      setProjects(filtered);
    }
  }

  return (
    <div className="container-fluid mb-5" id="projects">
      <h2 className="display-4 text-center my-4">Projects</h2>
      <form>
        <div className="form-row">
          <div className="mx-auto" style={{width:"88%", maxWidth:"500px"}}>
            <input type="text" className="form-control" placeholder="Filter by name or technology" onChange={filterProjects} />
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" onClick={(e) => filterProjects(e, "game")}>#game</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" onClick={(e) => filterProjects(e, "node")}>#node</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" onClick={(e) => filterProjects(e, "jquery")}>#jquery</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" onClick={(e) => filterProjects(e, "api")}>#api</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" onClick={(e) => filterProjects(e, "bootstrap")}>#bootstrap</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" onClick={(e) => {filterProjects(e, "");}}>#all</a>
          </div>
          
        </div>
      </form>
      <div className="row mx-auto" style={{maxWidth:"1500px"}}>
        {projects.map((project, index) => <Project key={index} pid={"p" + index} project={project}/>)}
      </div>
    </div>
  );
}