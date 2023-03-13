import ContactButton from "../ContactButton";
import ContactForm from "../ContactForm";

export default function Contact() {

  return (
    <div className="container-fluid text-center">
      <h2 className="display-4 my-4">Contact</h2>
      <div className="row">
        <div className="col-lg-6">
          <div className="mt-3 mb-5 mx-auto text-justify" style={{maxWidth:"560px", lineHeight:"1.7"}}>
            <p className="mb-2">Want to get in touch to talk about a project I could be of help with?</p>
            <p className="mb-1">You can contact me via email, phone or through any of my social profiles below.</p>
            <p>Or just fill out the form to send me a message in a snap. I look forward to hearing from you 😀</p>
            </div>
          <ul className="p-0 pb-3 mx-auto">
            <ContactButton link="mailto:jonathan@davis.com" icon="envelope" text="email" />
            <ContactButton link="https://www.linkedin.com/in/jonathan-davis-405a9a87/" text="linkedin" />
            <ContactButton link="https://github.com/trunten" text="github" />
            <ContactButton link="https://twitter.com/username" text="twitter" />
            <ContactButton link="https://www.facebook.com/username" text="facebook" />
          </ul>
          <div style={{marginTop: "20px", fontSize: "14px"}}>
            <p className="text-center">
              Tel: <a href="tel:+441211211211">0121 121 1211</a>
              <span className="mx-3">|</span>
              Mob: <a href="tel:+447123456789">07123 456 789</a>
            </p>
            <a href="https://github.com/trunten/trunten/raw/main/files/CV.pdf" className='btn btn-outline-dark px-3 py-2 mt-2 mb-4 font-weight-bold' style={{borderWidth:"2px", fontSize:"14px"}}><i className="fa fa-download mr-2" aria-hidden="true"></i>Check out my resume</a>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}