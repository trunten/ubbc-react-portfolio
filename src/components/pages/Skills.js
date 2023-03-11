import ProgressBar from "../ProgressBar";

export default function Skills() {
  return (
    <div id="skills" className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 mx-auto">
            <h2 className="display-4 text-center my-4">Current Skills</h2>
            <ProgressBar name="HTML" width="80" />
            <ProgressBar name="CSS" width="40" />
            <ProgressBar name="Bootstrap" width="30" />
            <ProgressBar name="JavaScript" width="70" />
            <ProgressBar name="Java" width="15" />
            <ProgressBar name="React" width="10" />
            <ProgressBar name="VBA" width="90" />
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 mx-auto">
            <h2 className="display-4 text-center my-4">Future Skills</h2>
            <p>As well as enhancing my current skill set, just some of the skills I expect to learn over the course of my bootcamp are:</p>
            <ul>
              <li>JQuery</li>
              <li>Web, 3rd Party & Server APIs</li>
              <li>Client storage</li>
              <li>Advanced ES6</li>
              <li>Test-Driven Development</li>
              <li>Node.js, NPM & React</li>
              <li>Behaviour-Driven Development</li>
              <li>Agile Methodology</li>
            </ul>
          </div>
        </div>
      </div>
  );
}