export default function Skills() {
  return (
    <div id="skills" className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 mx-auto">
            <h2 className="display-4 text-center my-4">Current Skills</h2>
              <span className="text-top">HTML <small id="HTML">80%</small></span>
              <div className="progress mb-2">
                <div id="HTML-bar" className="progress-bar bg-secondary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
              </div>
              <span>CSS <small id="CSS">40%</small></span>
              <div className="progress mb-2">
                <div id="CSS-bar" className="progress-bar bg-secondary" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}></div>
              </div>
              <span>Bootstrap <small>30%</small></span>
              <div className="progress mb-2">
                <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style={{width: "30%"}}></div>
              </div>
              <span>Javascript <small id="JavaScript">70%</small></span>
              <div className="progress mb-2">
                <div id="JavaScript-bar" className="progress-bar bg-secondary" role="progressbar" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
              </div>
              <span>Java <small id="Java">15%</small></span>
              <div className="progress mb-2">
                <div id="Java-bar" className="progress-bar bg-secondary" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{width: "15%"}}></div>
              </div>
              <span>React <small id="VBA">10%</small></span>
              <div className="progress mb-2">
                <div id="VBA-bar" className="progress-bar bg-secondary" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{width: "10%"}}></div>
              </div>
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