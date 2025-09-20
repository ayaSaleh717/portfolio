"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/p5.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/portifolio",
    previewUrl: "https://ayasaleh717.github.io/portifolio/",
  },
  {
    id: 2,
    title: "Flower Shop Website",
    description: "Project 2 description",
    image: "/images/projects/p1.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/ayaSaleh717/fullstac-flower_shop",
    previewUrl: "https://flower-shop-c022.onrender.com/",
  },
  {
    id: 3,
    title: "Chat App Website",
    description: "Project 3 description",
    image: "/images/projects/p2.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/ayaSaleh717/full-stack-chat-app",
    previewUrl: "https://full-stack-chat-app-0gzn.onrender.com/",
  },
  {
    id: 4,
    title: "IMBD clone",
    description: "Project 4 description",
    image: "/images/projects/p3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/MoveApp",
    previewUrl: "https://move-website.vercel.app/",
  },
  {
    id: 5,
    title: "CarHub",
    description: "Authentication and CRUD operations",
    image: "/images/projects/p4.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/car_hub",
    previewUrl: "https://car-hub-tdn8.vercel.app/",
  },
  {
    id: 6,
    title: "Simple Weather App",
    description: "Project 5 description",
    image: "/images/projects/p7.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/weather",
    previewUrl: "https://ayasaleh717.github.io/weather/",
  },
  {
    id: 7,
    title: "React E-commerce Website",
    description: "Project 1 description",
    image: "/images/projects/p6.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/E-commercal",
    previewUrl: "https://ayasaleh717.github.io/E-commercal/",
  },
  {
    id: 8,
    title: "Simple Dashboard ",
    description: "Project 1 description",
    image: "/images/projects/p8.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/simple_dashboard",
    previewUrl: "https://ayasaleh717.github.io/simple_dashboard/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
