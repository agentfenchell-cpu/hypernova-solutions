import { content } from "../data/content";
import "./Pricing.css";

const coachingLinks = [
  "https://buy.stripe.com/4gM5kC8ivbP1d4YfBXeIw01",  // Coaching 1H
  "https://buy.stripe.com/6oU5kC9mz1and4Y0H3eIw02",  // Forfait 3H
  "https://buy.stripe.com/dRmaEW7er5qDc0UgG1eIw03",  // Forfait 5H
];

export default function Pricing() {
  const { pricing, guarantees } = content;

  return (
    <section className="pricing" id="pricing">
      <div className="pricing__container">
        <h2 className="pricing__title">{pricing.sectionTitle}</h2>

        <div className="pricing__grid">
          {/* Main Offer - Pack Démarrage */}
          <div className="pricing__main-card">
            <div className="pricing__card-header">
              <h3 className="pricing__card-name">{pricing.packDemarrage.name}</h3>
              <p className="pricing__card-subtitle">{pricing.packDemarrage.subtitle}</p>
            </div>

            <div className="pricing__card-price">
              <span className="pricing__amount">{pricing.packDemarrage.price}</span>
              <span className="pricing__currency">{pricing.packDemarrage.currency}</span>
              <span className="pricing__label">{pricing.packDemarrage.priceLabel}</span>
            </div>

            <p className="pricing__includes">{pricing.packDemarrage.includes}</p>

            <ul className="pricing__steps">
              {pricing.packDemarrage.steps.map((step, index) => (
                <li key={index} className="pricing__step">
                  <span className="pricing__step-number">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ul>

            <a
              href="https://buy.stripe.com/6oUdR80Q32er2qk89veIw00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn pricing__cta"
            >
              {pricing.packDemarrage.cta}
            </a>
          </div>

          {/* Coaching Options */}
          <div className="pricing__coaching">
            <h3 className="pricing__coaching-title">{pricing.coachingTitle}</h3>

            <div className="pricing__coaching-list">
              {pricing.coaching.map((option, index) => (
                <div key={index} className="pricing__coaching-item">
                  <span className="pricing__coaching-duration">{option.duration}</span>
                  <span className="pricing__coaching-price">
                    {option.price}
                    <span className="pricing__coaching-currency">{option.currency}</span>
                    <span className="pricing__coaching-label">{option.priceLabel}</span>
                  </span>
                  <a
                    href={coachingLinks[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing__coaching-cta"
                  >
                    Réserver
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <p className="pricing__guarantee">{guarantees.text}</p>
      </div>
    </section>
  );
}
