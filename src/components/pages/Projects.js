import Project from "../Project";
import allProjects from "../../projects.json";
import { useState } from "react";
import { useParams } from 'react-router';

export default function Projects() {
  const { id } = useParams();
  const [imageType, setImageType] = useState("screenshot");
  const [projects, setProjects] = useState(allProjects);

  function filterProjects(e, str) {
    e.preventDefault();
    if (str !== undefined) { document.querySelector("input").value = ""; } else { str = e.target.value.trim(); }
    if (str === "") {
      setProjects(allProjects);
    } else {
      const filtered = allProjects.filter((project) => {
        const re = new RegExp(str, "ig");
        return project.title.match(re) || project.tags.join(" ").match(re);
      })
      setProjects(filtered);
    }
  }

  function imageToggle(e) {
    e.preventDefault();
    if (e.target.tagName === "DIV") { return; }
    const marketing = document.querySelector("#marketing")
    const screenshot = document.querySelector("#screenshot")
    let newType;
    if (e.target.tagName === "BUTTON") {
      if (marketing.checked ) {
        newType = "screenshot";
        screenshot.checked = true
      } else {
        newType = "marketing";
        marketing.checked = true;
      }  
    } else {
      if (e.target.htmlFor === "marketing") {
        newType = "marketing";
        marketing.checked = true;
      } else {
        newType = "screenshot";
        screenshot.checked = true
      }
    }
    setImageType(newType);
  }

  return (
    <div className="container-fluid mb-5" id="projects">
      <h2 className="display-4 text-center my-4">{!id ? "Projects" : projects.filter(p => p.pid === id)[0]?.title || "OOPS!"}</h2>
      {!id &&
      <form>
        <div className="form-row">
          <div className="mx-auto" style={{width:"88%", maxWidth:"500px"}}>
            <input type="text" className="form-control" placeholder="Filter by name or technology" onChange={filterProjects} />
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" style={{fontSize: "15px"}} onClick={(e) => filterProjects(e, "game")}>#game</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" style={{fontSize: "15px"}} onClick={(e) => filterProjects(e, "node")}>#node</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" style={{fontSize: "15px"}} onClick={(e) => filterProjects(e, "jquery")}>#jquery</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" style={{fontSize: "15px"}} onClick={(e) => filterProjects(e, "api")}>#api</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" style={{fontSize: "15px"}} onClick={(e) => filterProjects(e, "bootstrap")}>#bootstrap</a>
            <a href="/" className="my-2 mx-1 btn btn-outline-dark" style={{fontSize: "15px"}} onClick={(e) => {filterProjects(e, "");}}>#all</a>
          </div>
        </div>
      </form>}
      <div className="row mx-auto position-relative" style={{maxWidth:"1500px"}}>
        <div className="toggle" id="image-toggle" onClick={imageToggle}>
          <label htmlFor="screenshot">Screenshot</label>
          <input type="radio" name="image" id="screenshot" className="toggle-on" defaultChecked />
          <button className="toggle-btn" id="theme-toggle-btn"></button>
          <input type="radio" name="image" id="marketing" className="toggle-off" />
          <label htmlFor="marketing">Marketing</label>
        </div>
        <div className="w-100"></div>
        {projects.map((project, index) => (!id || id === project.pid) && <Project key={index} type={imageType} project={project} />)}
      </div>
    </div>
  );
}