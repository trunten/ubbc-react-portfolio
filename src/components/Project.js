// import { useState } from "react";
// import placeholder from "../images/placeholder.jpg";

export default function Project(props) {  
  const {title, languages, description, image, link, gh, hero} = props.project;
  
  // Dynamic imports from src folder - works but needs more testing
  // const [img, setImg] = useState(placeholder);
  // function getImg(src) {
  //   import(`../images/${src}`).then((image) => setImg(image.default));
  // }
  // getImg(image.replace("/images/",""));
  
  function cardClick(e) {
    if (e.target.tagName !== "A") {
      window.open(link || gh, "_blank");
    }
  }

  return (
    <div className={"mb-4 " + (hero ? "col-sm-12 col-md-8 col-lg-6" : "col-sm-6 col-md-4 col-lg-3")} onClick={cardClick}>
      <div className="card h-100">
        <div className="img-wrapper">
          <div className="buttons">
            {link && <a href={link} target="_blank" className={`btn btn-outline-light rounded-pill ${gh ? "mb-3" : ""}`} rel="noreferrer">Deployed Site</a>}
            {gh && <a href={gh} target="_blank" className={`btn btn-outline-light rounded-pill ${link ? "mt-3" : ""}`} rel="noreferrer">GitHub Repo</a>}
          </div>
          {/* <img src={img} className="card-img-top" alt={description || "project image"} /> */}
          <img src={process.env.PUBLIC_URL + image} className="card-img-top" loading="lazy" alt={description || "project image"} />
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