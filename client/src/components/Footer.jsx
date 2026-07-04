import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-left">
          <h2>Sai Raj<span>.</span></h2>

          <p>
            Full Stack Developer passionate about building
            modern web applications and solving real-world problems.
          </p>
        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/Sairaj113113"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sairaj-aitha"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:sairajaitha@gmail.com">
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Sai Raj Aitha. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;