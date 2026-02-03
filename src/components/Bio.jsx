import { content } from "../data/content";
import victorImage from "../assets/victor_image.jpg";
import logoWhite from "../assets/white_logo_transparent_background.png";
import "./Bio.css";

export default function Bio() {
  return (
    <section className="bio" id="about">
      <div className="bio__container">
        {/* LEFT: Photo + Logo */}
        <div className="bio__image-column">
          <img
            src={victorImage}
            alt={content.bio.name}
            className="bio__image"
          />
          <img
            src={logoWhite}
            alt="HYPERNOVA"
            className="bio__logo"
          />
        </div>

        {/* RIGHT: Text + Quote */}
        <div className="bio__content">
          <h2 className="bio__name">{content.bio.name}</h2>
          <span className="bio__role">{content.bio.role}</span>
          <div className="bio__divider"></div>
          <p className="bio__description">
            {content.bio.description} Chaque session est assurée en partenariat exclusif avec le cabinet <strong>Fenchell</strong>.
          </p>

          <blockquote className="bio__quote">
            <p>HYPERNOVA – Accompagnement dédié aux vendeurs Amazon</p>
            <p>Hotline d'experts pour besoins ponctuels, sans engagement mensuel.</p>
            <p>Couverture complète des problématiques Seller Central :</p>
            <p>KYC, conformité, catalogues et variations, expéditions FBA, PAN-EU et US, Ads, promotions, blocages de compte ou d'ASIN.</p>
            <p>Un besoin → une réponse → une action.</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
