import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
// import { useState } from "react";
// import placeholder from "../images/placeholder.jpg";

export default function Project(props) {  
  const { id } = useParams();
  const { pid, title, languages, description, image, screenshot, link, gh, hero } = props.project;
  const src = process.env.PUBLIC_URL + "/images/" + (props.type === "marketing" ? image : "screenshots/" + screenshot);
  // // Dynamic imports from src folder - works but needs more testing
  // const [img, setImg] = useState(placeholder);
  // function getImg(src) {
  //   import(`../images/${src}`).then((image) => setImg(image.default));
  // }
  // getImg(image);

  function cardClick(e) {
    if (e.target.tagName !== "A" && e.target.tagName !== "I") {
      window.open(link || gh, "_blank");
    }
  }
  return (
    <div style={id ? {maxWidth: "700px"} :{}} className={"mb-4 " + (id ? "col mx-auto" : (hero ? "col-sm-12 col-md-8 col-lg-6" : "col-sm-6 col-md-4 col-lg-3"))} onClick={cardClick}>
      <div className="card h-100" >
        <div className="img-wrapper">
          <div className="buttons">
            {link && <a href={link} target="_blank" className={`btn btn-outline-light rounded-pill ${gh ? "mb-3" : ""}`} rel="noreferrer">Deployed Site</a>}
            {gh && <a href={gh} target="_blank" className={`btn btn-outline-light rounded-pill ${link ? "mt-3" : ""}`} rel="noreferrer">GitHub Repo</a>}
          </div>
          <NavLink to={`/projects/${pid}`}>
            <i style ={{position:"absolute", top:"11px", right:"13px", color:"white", scale:"1.5", rotate:"90deg"}} className="fa fa-link" aria-hidden="true"></i>
          </NavLink>
          {/* <img src={img} className="card-img-top" alt={description || "project image"} /> */}
          <img data-type={props.type} style={id ? {height: "500px"} :{}} src={src} className="card-img-top" loading="lazy" alt={description || "project image"} />
        </div>
        <div className="card-body px-3 pb-0" style={{position: "relative"}}>
          <h5 className="card-title my-0">{title}</h5>
          <p className="card-text py-2" style={{fontSize: "14px"}}>{description}</p>
          <span className="small mb-3 text-muted" style={{position: "absolute", bottom: 0}}>{languages}</span>
        </div>
      </div>
    </div>
    );
  }