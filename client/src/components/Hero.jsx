import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-tag">
            👋 Hello, I'm
          </p>

          <h1>
            Sai Raj <span>Aitha</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            Passionate Computer Science Engineering student with strong
            knowledge in Java, Web Development, Backend Development,
            Databases and Full Stack Application Development.
            Currently seeking internship opportunities to build
            impactful software solutions.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Download Resume
            </button>
          </div>

        </div>

        <div className="hero-image">

          <div className="image-circle">

            <img
              src="/profile.png"
              alt="Sai Raj"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;