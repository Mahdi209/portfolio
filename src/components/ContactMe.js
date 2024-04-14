export default function ContactMe() {
  return (
    <div id="contact">
      <div id="contact-title">
        <span>Contact</span> Me
      </div>
      <form>
        <input type="text" placeholder="Name" className="input" />
        <input type="text" placeholder="Email" className="input" />
        <textarea
          placeholder="Message"
          name="Message"
          id="massage"
          cols="30"
          rows="10"
          className="input"
        ></textarea>
        <input type="submit" className="input" id="btn" />
      </form>
    </div>
  );
}
