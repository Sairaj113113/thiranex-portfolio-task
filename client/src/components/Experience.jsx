import "./Experience.css";

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Thiranex",
    duration: "2026 - Present",
    description:
      "Working on full-stack web application development using React, Node.js, Express.js and MongoDB. Building responsive user interfaces, REST APIs and database-driven applications."
  },
  {
    role: "Academic Projects",
    company: "KL University",
    duration: "2024 - Present",
    description:
      "Developed multiple real-world projects including booking systems, complaint management systems and event management websites using modern web technologies."
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <div className="section-header">
          <h2 className="title">Experience</h2>
          <p className="subtitle">
            My internship and project experience.
          </p>
        </div>

        <div className="timeline">

          {experiences.map((exp, index) => (
            <div className="timeline-card glass" key={index}>

              <h3>{exp.role}</h3>

              <h4>{exp.company}</h4>

              <span>{exp.duration}</span>

              <p>{exp.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;