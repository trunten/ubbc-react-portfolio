export default function Project(props) {
    const {id, title, languages, description, image, link, hero} = props.project;
    console.log(process.env.PUBLIC_URL);
    return (
      <div id={id} className={hero ? "col-sm-12 col-md-8 col-lg-6" : "col-sm-6 col-md-4 col-lg-3"}>
            <div className="card">
              <div className="img-wrapper">
                <a href={link} target="_blank" className="btn btn-outline-light rounded-pill" rel="noreferrer">Deployed Site</a>
                <img src={process.env.PUBLIC_URL + image} className="card-img-top" loading="lazy" alt="project screenshot" />
              </div>
              <div className="card-body p-3">
                <h5 className="card-title my-0">{title}</h5>
                <p className="card-text"><span className="small">{languages}</span></p>
              </div>
            </div>
          </div>
    );
  }