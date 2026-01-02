import { memo } from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero flex">
      <div className="left-section">

        <div className="parent-avatar flex">
          <img
            src="./me2.webp"
            className="avatar"
            alt="Mohamed Rabee"
            loading="lazy"
          />
        </div>

        <h1 className="title">Fullstack Developer</h1>

        <p className="subtitle">
          I am a <span className="animated-name">Mohamed Rabee</span>, a passionate Fullstack Developer specializing in <strong>React, Next.js, and Node.js</strong>. I focus on building fast, responsive, and high-quality web applications, both on the frontend and backend. I am always eager to tackle new challenges and continuously learn in this ever-evolving field.
        </p>

        <div className="all-icons flex">
          <a href="https://wa.me/201123439278" target="_blank" rel="noreferrer">
            <div className="icon icon-whatsapp" />
          </a>
          <a href="https://github.com/Mohamerabee98" target="_blank" rel="noreferrer">
            <div className="icon icon-github" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-rabee-66bb03278" target="_blank" rel="noreferrer">
            <div className="icon icon-linkedin" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default memo(Hero);
