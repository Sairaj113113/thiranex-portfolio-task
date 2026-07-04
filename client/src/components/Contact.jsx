import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            I'm always interested in discussing internship opportunities,
            software development and full-stack projects.
          </p>

          <div className="info-item">
            <h4>Email</h4>
            <a href="mailto:sairajaitha@gmail.com">
              sairajaitha@gmail.com
            </a>
          </div>

          <div className="info-item">
            <h4>Phone</h4>
            <a href="tel:+919391625936">
              +91 9391625936
            </a>
          </div>

          <div className="info-item">
            <h4>Location</h4>
            <p>Hyderabad, Telangana, India</p>
          </div>

          <div className="info-item">
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/sairaj-aitha"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sairaj-aitha
            </a>
          </div>

          <div className="info-item">
            <h4>GitHub</h4>
            <a
              href="https://github.com/Sairaj113113"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Sairaj113113
            </a>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;