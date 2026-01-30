import { content } from "../data/content";
import "./Terms.css";

export default function Terms() {
  const { legalTerms } = content;

  return (
    <section className="terms">
      <div className="terms__container">
        <h3 className="terms__title">{legalTerms.title}</h3>

        <ul className="terms__list">
          <li className="terms__item">
            <span className="terms__label">Objectif :</span> {legalTerms.objective}
          </li>
          <li className="terms__item">
            <span className="terms__label">Garantie :</span> {legalTerms.guarantee}
          </li>
          <li className="terms__item">
            <span className="terms__label">Désactivation :</span> {legalTerms.deactivation}
          </li>
        </ul>
      </div>
    </section>
  );
}
