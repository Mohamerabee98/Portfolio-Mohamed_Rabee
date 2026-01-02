import { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Timeline.css";

const timelineData = [
  {
    year: "2024",
    events: [
      {
        side: "left",
        title: "Front-End Diploma",
        text: "The Front-End Development Diploma focuses on essential skills like HTML, CSS, JavaScript, React, and Next.js to prepare you for building modern, responsive web applications.",
      },
      {
        side: "right",
        title: "Back-End Diploma",
        text: "The Backend Development Diploma covers key skills like Node.js, Express, databases, and NestJs to equip you with the knowledge needed to build powerful, scalable backend systems.",
      },
    ],
  },
  { 
    year: "2025",
    events: [
      {
        side: "left",
        title: "Internship at CodeAlpha",
        text: "Gained hands-on experience in HTML, CSS, and JavaScript, developing practical skills for frontend development.",
      },
      {
        side: "right",
        title: "Internship at CodeSoft",
        text: "Worked with HTML, CSS, Bootstrap, and JavaScript, enhancing web development and project management skills.",
      },
      {
        side: "left",
        title: "Freelance Work",
        text: "Delivered projects using HTML, CSS, Bootstrap, JavaScript, and React, improving problem-solving and front-end development skills.",
      },
      {
        side: "right",
        title: "Head of Backend Development at IEEE",
        text: "Led backend teams and built scalable web applications using Node.js and MySQL.",
      },
      {
        side: "left",
        title: "Front-End React Developer at DeepSoft",
        text: "Developed modern and responsive web apps using ReactJS.",
      },
    ],
  },
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <section id="Experience" className="Timeline">
      <div className="container-timeline">
        <h2 className="sections-title">Experience</h2>
        <div className="timeline-content">
          {timelineData.map((item, index) => (
            <div key={index}>
              <div className="year">{item.year}</div>
              {item.events.map((event, i) => (
                <div key={i} className={`event ${event.side}`}>
                  <div
                    className="content"
                    data-aos={event.side === "left" ? "fade-right" : "fade-left"}
                  >
                    <h3>{event.title}</h3>
                    <p>{event.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Timeline);
