import ContactButton from "../ContactButton";

export default function Contact() {
  return (
    <div className="container-fluid text-center" id="contact">
      <h2 className="display-4 my-4">Contact</h2>
      <ul className="p-0 pb-3">
        <ContactButton link="mailto:jonathan@davis.com" icon="envelope" text="email" />
        <ContactButton link="https://twitter.com/username" text="twitter" />
        <ContactButton link="https://www.linkedin.com/in/jonathan-davis-405a9a87/" text="linkedin" />
        <ContactButton link="https://www.facebook.com/username" text="facebook" />
        <ContactButton link="https://github.com/trunten" text="github" />
      </ul>
      <div style={{marginTop: "20px", fontSize: "14px"}}>
        <p>
          Tel: <a href="tel:+441211211211">0121 121 1211</a>
          <span className="mx-3">|</span>
          Mob: <a href="tel:+447123456789">07123 456 789</a>
        </p>
      </div>
    </div>
  );
}