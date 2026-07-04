import "./Projects.css";

const projects = [
  {
    title: "Multi-Service Booking Platform",
    description:
      "A full-stack service booking platform with user authentication, service management and MySQL database integration.",
    tech: ["Java", "MySQL", "Hibernate"],
    image: "/booking.png",
    github: "https://github.com/Sairaj113113/service-booking-platform",
  },
  {
    title: "RoadCare",
    description:
      "Road infrastructure complaint management system with role-based authentication and issue tracking.",
    tech: ["Java", "Hibernate", "MySQL"],
    image: "/roadcare.png",
    github: "https://github.com/Sairaj113113/roadcare",
  },
  {
    title: "Kalyan DJ Sounds",
    description:
      "Premium event decoration website developed for a real client using Next.js, Firebase and Cloudinary.",
    tech: ["Next.js", "Firebase", "Cloudinary"],
    image: "/event.png",
    github: "https://github.com/Sairaj113113/djsounds_events",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="section-header">
          <h2 className="title">Projects</h2>
          <p className="subtitle">
            Some of my featured full-stack projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass" key={index}>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                  >
                    GitHub Repository
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;