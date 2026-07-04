import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript"]
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Hibernate"]
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"]
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="section-header">
          <h2 className="title">Technical Skills</h2>
          <p className="subtitle">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-card glass" key={index}>

              <h3>{category.title}</h3>

              <div className="skill-list">

                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;