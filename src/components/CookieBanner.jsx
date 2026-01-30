import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CookieBanner.css";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Nous utilisons des cookies pour garantir le bon fonctionnement du site et analyser notre audience.
          Vous pouvez accepter ou refuser leur utilisation.{" "}
          <Link to="/confidentialite" className="cookie-banner__link">
            En savoir plus
          </Link>
        </p>
        <div className="cookie-banner__buttons">
          <button onClick={handleDecline} className="cookie-banner__button cookie-banner__button--decline">
            Refuser
          </button>
          <button onClick={handleAccept} className="cookie-banner__button cookie-banner__button--accept">
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
