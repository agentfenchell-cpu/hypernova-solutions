import { content } from "../data/content";
import picComplience from "../assets/pic_complience.jpeg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid"></div>

      <div
        className="hero__art"
        aria-hidden="true"
        style={{ backgroundImage: `url(${picComplience})` }}
      />

      <div className="hero__content">
        <span className="hero__overline">{content.hero.overline}</span>
        <h1 className="hero__headline">{content.hero.headline}</h1>
        <h2 className="hero__subhead">{content.hero.subhead}</h2>
        <p className="hero__value-prop">{content.hero.valueProp}</p>
        <a href="#contact" className="btn hero__cta">
          {content.hero.cta}
        </a>
      </div>
    </section>
  );
}
