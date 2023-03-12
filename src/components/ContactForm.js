import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdovdzdy");

  if (state.succeeded) {
    return (
      <>
        <i className="fa fa-check-circle fa-5x" style={{color:"green"}}></i>
        
        <p className='h3 my-3'>Thanks for your message!</p>
        <p>I'll be in touch</p>
      </>
    );
  }
  return(
    <form className="needs-validation text-left mx-auto" style={{maxWidth: "560px"}} onSubmit={handleSubmit} method="POST">
      <div className="mb-3 form-group">
        <label htmlFor="name">Your name</label>
        <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="email">Your email</label>
        <input type="text" className="form-control" name="email" id="email" placeholder="Email address" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="message" className="form-label">Your message to me</label>
        <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
        <button className="btn btn-outline-primary w-100" type="submit" disabled={state.submitting}>Send message</button>
    </form>
  );
}