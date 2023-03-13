import ProgressBar from "../ProgressBar";
import js_i from "../../images/js.png";
import bootstrap_i from "../../images/bootstrap.png";
import react_i from "../../images/react.png";
import html_i from "../../images/html.png";
import css_i from "../../images/css.png";
import node_i from "../../images/node.png";
import jquery_i from "../../images/jquery.png";
import git_i from "../../images/git.png";
import npm_i from "../../images/npm.png";
// import java_i from "../../images/java.png";

export default function Skills() {

  const stack = [
    { name: "JavaScript", icon: js_i },
    { name: "Node.js", icon: node_i },
    { name: "npm", icon: npm_i },
    { name: "React", icon: react_i },
    { name: "jQuery", icon: jquery_i },
    { name: "HTML", icon: html_i },
    { name: "CSS", icon: css_i },
    { name: "Bootstrap", icon: bootstrap_i },
    { name: "Git", icon: git_i },
    // { name: "Java", icon: java_i },
  ];

  return (

    <div id="skills" className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 mx-auto">
            <h2 className="display-4 text-center my-4">Skills</h2>
            <ProgressBar name="HTML" width="95" />
            <ProgressBar name="CSS" width="60" />
            <ProgressBar name="Bootstrap" width="50" />
            <ProgressBar name="JavaScript" width="90" />
            <ProgressBar name="Java" width="15" />
            <ProgressBar name="React" width="20" />
            <ProgressBar name="VBA" width="80" />
          </div>
          <div className="col-md-6 mx-auto">
            <h2 className="display-4 text-center my-4">Tech Stack</h2>
            <div className="d-flex flex-wrap mx-auto justify-content-center mb-2" style={{maxWidth:"570px"}}>
              {stack.map(icon =>  {
                return (
                  <div className="stack-icon my-3 mx-2">
                    <img src={icon.icon} alt={icon.name} />
                    <p className="text-center m-0 p-0" style={{fontSize:"14px"}}>{icon.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}