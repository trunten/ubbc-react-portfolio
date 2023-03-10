export default function Project(props) {
    const {title, languages, description, image} = props.project;
    return (
      <div>
        <h2>{title}</h2>
        <img src={image} alt="project screenshot"></img>
        <p>
          {description}
          <p>{languages}</p>
        </p>
      </div>
    );
  }