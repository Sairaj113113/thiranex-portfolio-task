import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="section-header">
          <h2 className="title">About Me</h2>
          <p className="subtitle">
            Get to know me better.
          </p>
        </div>

        <div className="about-container">

          <div className="about-card glass">
            <h3>Who am I?</h3>

            <p>
              I'm <strong>Sai Raj Aitha</strong>, a Computer Science Engineering
              student at KL University with a strong passion for full-stack
              development and software engineering.
            </p>

            <p>
              I enjoy building scalable web applications using Java,
              JavaScript, React, Node.js, Express.js and MySQL while learning
              modern development technologies.
            </p>

            <p>
              My goal is to become a software engineer capable of building
              high-quality applications that solve real-world problems.
            </p>

            <div className="about-info">

              <div>
                <h4>Education</h4>
                <span>B.Tech - CSE</span>
              </div>

              <div>
                <h4>University</h4>
                <span>KL University</span>
              </div>

              <div>
                <h4>CGPA</h4>
                <span>9.85</span>
              </div>

              <div>
                <h4>Location</h4>
                <span>Hyderabad, India</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;