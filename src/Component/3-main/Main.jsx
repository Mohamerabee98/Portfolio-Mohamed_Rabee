import { useState, useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { frontendProjects, backendProjects } from "./myprojects";

import "./main.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  const projects = activeTab === "frontend" ? frontendProjects : backendProjects;

  return (
    <section id="Projects" className="projects-section">
      <h2 className="sections-title">My Projects</h2>

      <div className="projects-tabs">
        {["frontend", "backend"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        loop
        grabCursor
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="projects-swiper smooth-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card" data-aos="fade-up">
              <img
                src={project.imgPath}
                alt={project.Ptitle}
                loading="lazy"
              />

              <div className="card-content">
                <h3>{project.Ptitle}</h3>
                <p>{project.Pdescription}</p>

                <div className="tech-stack">
                  {project.category.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="card-links">
                  <a href={project.iconlink} target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a href={project.iconGithub} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(Projects);
