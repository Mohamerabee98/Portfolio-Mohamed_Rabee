import "./skills.css";
import { memo } from "react";
import { skills } from "./skillsTool.js";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title sections-title">My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-box">
            <h3 className="skill-category">{category}</h3>
            <div className="skill-list">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Skills);
