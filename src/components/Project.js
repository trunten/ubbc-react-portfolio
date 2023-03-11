export default function Project(props) {
    const {title, languages, description, image, link, hero} = props.project;
    console.log(process.env.PUBLIC_URL);
    return (
      <div className={"mb-4 " + (hero ? "col-sm-12 col-md-8 col-lg-6" : "col-sm-6 col-md-4 col-lg-3")}>
            <div className="card h-100">
              <div className="img-wrapper">
                <a href={link} target="_blank" className="btn btn-outline-light rounded-pill" rel="noreferrer">Deployed Site</a>
                <img src={process.env.PUBLIC_URL + image} className="card-img-top" loading="lazy" alt={description || "project screenshot"} />
              </div>
              <div className="card-body px-3 pb-0" style={{position: "relative"}}>
                <h5 className="card-title my-0">{title}</h5>
                <p className="card-text py-2" style={{fontSize: "14px"}}>{description}</p>
                <span className="small mb-3" style={{position: "absolute", bottom: 0}}>{languages}</span>
              </div>
            </div>
          </div>
    );
  }