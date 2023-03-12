import { NavLink } from 'react-router-dom';
import avatar from "../../images/profile.png";

export default function About() {
  return (
    <div id="about" className="jumbotron jumbotron-fluid bg-white mb-0">
      <div className="container">
        <img src={avatar} height="200px" alt="My profile avatar" />
        <h2 className="h1">Jonathan Davis</h2>
        <p className="lead"><span className="font-weight-bold">Profession:</span> Amateur Coder</p>
        <br />
        <h3>About Me</h3>
        <p>
          I'm a budding front-end developer based in Birmingham in the UK. I'm new to the game but full of enthusiasm and keen to work relentlessly to develop my skills and become an all round front-end specialist. 
          <br /><br />I've only just begun my journey but have already completed a number of projects that I feel showcase the skills I've learned so far. Check out my projects to see what I can do, and watch this space because I'm just going to get better and better as the weeks move on.
          <br /><br />Like what you see? Feel free to <NavLink to="/contact" end className="text-warning">contact me</NavLink> any time, day or night.
        </p>
        <a href="https://github.com/trunten/trunten/raw/main/files/CV.pdf" className='btn btn-outline-light px-3 py-2 font-weight-bold' style={{borderWidth:"2px", fontSize:"14px"}}><i className="fa fa-download mr-2" aria-hidden="true"></i>Check out my resume</a>
      </div>
    </div>
  );
}