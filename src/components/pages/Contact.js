export default function Contact() {
  return (
    <div className="container-fluid text-center" id="contact">
      <h2 className="display-4 py-4">Contact</h2>
      <ul className="p-0">
        <li><a href="mailto:jonathan@davis.com"><i className="fa fa-envelope" aria-hidden="true" text="email"></i></a></li>
        <li><a href="https://twitter.com/username" target="_blank"><i className="fa fa-twitter" aria-hidden="true" text="twitter"></i></a></li>
        <li><a href="https://linkedin.com/in/username" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" text="linkedin"></i></a></li>
        <li><a href="https://www.facebook.com/username" target="_blank"><i className="fa fa-facebook" aria-hidden="true" text="facebook"></i></a></li>
        <li><a href="https://github.com/trunten" target="_blank"><i className="fa fa-github" aria-hidden="true" text="github"></i></a></li>
      </ul>
      <div id="phoneNum">
        <p>Tel: <a href="tel:+441211211211">0121 121 1211</a><span className="mx-3">|</span>Mob: <a href="tel:+447123456789">07123 456 789</a></p>
      </div>
    </div>
  );
}