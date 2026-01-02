import { useEffect, useState, useCallback } from "react";
import "./Header.css";

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("currentMoode") || "dark"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("currentMoode", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const toggleMenu = useCallback(() => {
    setShowModel((prev) => !prev);
  }, []);

  return (
    <header className="header flex">
      <div className="title-name">
        Mohamed <span>Rabee</span>
      </div>

      <button onClick={toggleMenu} className="menu icon-menu flex" />

      <nav>
        <ul className="flex">
          {["Home", "Projects", "Skills", "Experience", "Contact"].map(
            (item) => (
              <li key={item}>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </nav>

      <button onClick={toggleTheme} className="mode flex">
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"} />
      </button>

      {showModel && (
        <div className="fixed" onClick={toggleMenu}>
          <ul className="model" onClick={(e) => e.stopPropagation()}>
            <li>
              <button className="icon-cross" onClick={toggleMenu} />
            </li>
            {["Home", "Projects", "Skills", "Experience", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
