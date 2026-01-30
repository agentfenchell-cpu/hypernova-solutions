import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoFull from "../assets/logo_hypernova_transparent.png";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      setScrolled(y > 24);

      if (y <= 8) {
        setHidden(false);
      } else if (delta > 10 && y > 80) {
        setHidden(true);
      } else if (delta < -10) {
        setHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""} ${hidden ? "header--hidden" : ""}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logoFull} alt="HYPERNOVA" className="header__logo-img" />
        </Link>
      </div>
    </header>
  );
}
