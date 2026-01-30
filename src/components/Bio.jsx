import { content } from "../data/content";
import victorImage from "../assets/victor_image.jpg";
import "./Bio.css";

export default function Bio() {
  return (
    <section className="bio" id="about">
      <div className="bio__container">
        <div className="bio__image-wrapper">
          <img
            src={victorImage}
            alt={content.bio.name}
            className="bio__image"
          />
        </div>
        <div className="bio__content">
          <h2 className="bio__name">{content.bio.name}</h2>
          <span className="bio__role">{content.bio.role}</span>
          <div className="bio__divider"></div>
          <p className="bio__description">{content.bio.description}</p>
        </div>
      </div>
    </section>
  );
}
