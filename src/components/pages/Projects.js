import { useState } from "react";
import Project from "../Project";
import allProjects from "../../projects.json";

export default function Projects() {
  const [projects, setProjects] = useState(allProjects);

  function filterProjects(e) {
    if ((e.target && e.target.value.trim() === "") || e === "") {
      setProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => {
        const re = new RegExp((e.target && e.target.value) || e, "ig");
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
            <button className="my-2 mx-1 btn btn-outline-dark" onClick={() => filterProjects("game")}>#game</button>
            <button className="my-2 mx-1 btn btn-outline-dark" onClick={() => filterProjects("node")}>#node</button>
            <button className="my-2 mx-1 btn btn-outline-dark" onClick={() => filterProjects("api")}>#api</button>
            <button className="my-2 mx-1 btn btn-outline-dark" onClick={() => filterProjects("api")}>#api</button>
            <button className="my-2 mx-1 btn btn-outline-dark" onClick={() => filterProjects("bootstrap")}>#bootstrap</button>
            <button className="my-2 mx-1 btn btn-outline-dark" onClick={() => {filterProjects(""); document.querySelector("input").value = ""}}>#all</button>
          </div>
          
        </div>
      </form>
      <div className="row mx-auto" style={{maxWidth:"1500px"}}>
        {projects.map((project, index) => <Project key={index} pid={"p" + index} project={project}/>)}
      </div>
    </div>
  );
}