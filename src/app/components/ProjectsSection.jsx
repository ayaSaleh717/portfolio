"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

  const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "responsive portifolio using css ,bootstrap , react.js and react techniquies like react hooks and react router  ",
    image: "/images/p5.PNG",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/portifolio",
    previewUrl: "https://ayasaleh717.github.io/portifolio/",
  },
  {
    id: 2,
    title: "Flower Shop Website",
    description: "respnsive fullstack e-commerce site using react.js ,tailwind css, express.js , mongoodb,  ",
    image: "/images/p1.PNG",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/ayaSaleh717/fullstac-flower_shop",
    previewUrl: "https://flower-shop-c022.onrender.com/",
  },
  {
    id: 3,
    title: "Chat App Website",
    description: "Responsive full-stack chat application built with React.js, Tailwind CSS, Express.js, and MongoDB. Features real-time messaging, user authentication, and a modern, responsive interface. ",
    image: "/images/p2.PNG",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/ayaSaleh717/full-stack-chat-app",
    previewUrl: "https://full-stack-chat-app-0gzn.onrender.com/",
  },
  {
    id: 4,
    title: "IMBD clone",
    description: " a responsive move database site using next.js and tailwind",
    image: "/images/p3.PNG",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/MoveApp",
    previewUrl: "https://move-website.vercel.app/",
  },
  {
    id: 5,
    title: "CarHub",
    description: "responsive site using next.js and taiwind css",
    image: "/images/p4.PNG",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/car_hub",
    previewUrl: "https://car-hub-tdn8.vercel.app/",
  },
  {
    id: 6,
    title: "Simple Weather App",
    description: " simple responsive weather app using Api from weather api ",
    image: "/images/p7.PNG",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/weather",
    previewUrl: "https://ayasaleh717.github.io/weather/",
  },
  {
    id: 7,
    title: "React E-commerce Website",
    description: " responsive restaurent add to cart app using react.js and it’s techniquis like react router , react hooks and redux toolkit. ",
    image: "/images/p6.PNG",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/E-commercal",
    previewUrl: "https://ayasaleh717.github.io/E-commercal/",
  },
  {
    id: 8,
    title: "Simple Dashboard ",
    description: "Project  description",
    image: "/images/p8.PNG",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/simple_dashboard",
    previewUrl: "https://ayasaleh717.github.io/simple_dashboard/",
  },
    {
    id: 9,
    title: "RZN Assistant",
    description: "web application for a smart nutritionist powered by AI",
    image: "/images/p9.PNG",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ayaSaleh717/RZn-chatbot",
    previewUrl: "https://ayasaleh717.github.io/RZn-chatbot/",
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
