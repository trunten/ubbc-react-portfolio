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
    { name: "JavaScript", icon: js_i, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Node.js", icon: node_i, url: "https://nodejs.org/" },
    { name: "npm", icon: npm_i, url: "https://www.npmjs.com" },
    { name: "React", icon: react_i, url: "https://reactjs.org" },
    { name: "jQuery", icon: jquery_i, url: "https://jquery.com" },
    { name: "HTML", icon: html_i, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: css_i, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Bootstrap", icon: bootstrap_i, url: "https://getbootstrap.com" },
    { name: "Git", icon: git_i, url: "https://git-scm.com" },
    // { name: "Java", icon: java_i, url: "https://www.java.com/en/download/help/whatis_java.html" },
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
              {stack.map((badge, index) =>  {
                return (
                  <div key={index} className="stack-icon my-3 mx-2" onClick={()=>window.open(badge.url, "_blank")} >
                    <img src={badge.icon} alt={badge.name} />
                    <p className="text-center m-0 p-0" style={{fontSize: "14px", color: "black", textDecoration: "none"}}>{badge.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}