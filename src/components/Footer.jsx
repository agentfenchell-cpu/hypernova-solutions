import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link to="/cgv" className="footer__link">CGV</Link>
          <span className="footer__separator">|</span>
          <Link to="/mentions-legales" className="footer__link">Mentions légales</Link>
          <span className="footer__separator">|</span>
          <Link to="/confidentialite" className="footer__link">Politique de confidentialité</Link>
        </div>
        <p className="footer__copyright">© 2026 HYPERNOVA. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
