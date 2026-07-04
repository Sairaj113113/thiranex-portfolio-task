const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "RoadCare",
    description: "Complaint Management System",
    technologies: ["React", "Node.js", "MySQL"],
    github: "https://github.com/Sairaj113113",
    live: "#",
    image: "/roadcare.jpg"
  },
  {
    id: 2,
    title: "Kalyan DJ Sounds",
    description: "Event Decoration Website",
    technologies: ["Next.js", "Firebase", "Cloudinary"],
    github: "https://github.com/Sairaj113113",
    live: "#",
    image: "/kalyan.jpg"
  },
  {
    id: 3,
    title: "Booking Platform",
    description: "Multi-Service Booking Platform",
    technologies: ["Java", "Hibernate", "MySQL"],
    github: "https://github.com/Sairaj113113",
    live: "#",
    image: "/booking.jpg"
  }
];

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running...");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});