import { useEffect, useState } from "react";

import Header from "./Component/1-Header/Header";
import Hero from "./Component/2-Hero/Hero";
import Main from "./Component/3-main/Main";
import Skills from "./Component/Skills/Skills";
import Timeline from "./Component/Timeline/Timeline";
import Contact from "./Component/6-contact/Contact";
import Footer from "./Component/5-footer/Footer";

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // ===== Scroll to Top Button =====
    const handleScroll = () => {
      setShowArrow(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);

    // ===== Disable Right Click =====
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // ===== Disable F12 / Ctrl+Shift+I / Ctrl+U =====
    const handleKeyDown = (e) => {
      // F12
      if (e.key === "F12") e.preventDefault();

      // Ctrl+Shift+I or Ctrl+Shift+J
      if (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key.toUpperCase()))
        e.preventDefault();

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key.toUpperCase() === "U") e.preventDefault();
    };
    document.addEventListener("keydown", handleKeyDown);

    // ===== Cleanup =====
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />

      <div className="devider"></div>
      <Main />

      <div className="devider"></div>
      <Skills />

      <div className="devider"></div>
      <Timeline />

      <div className="devider"></div>
      <Contact />

      <div className="devider"></div>
      <Footer />

      {/* Scroll to Top Button */}
      <a
        href="#up"
        style={{
          opacity: showArrow ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <button
          className={`ArrowTop ${
            showArrow ? "icon-keyboard_arrow_up" : "icon-keyboard_arrow_down"
          }`}
        ></button>
      </a>
    </div>
  );
}

export default App;
