import "./LegalPage.css";

export default function MentionsLegales() {
  return (
    <div className="legal-wrapper">
      <div className="legal-container">
        <h1 className="legal-title">Mentions Légales</h1>

        <h2 className="legal-section-title">1. Éditeur du site</h2>
        <p className="legal-text">
          Le site est édité par : <strong>HYPERNOVA</strong>, Société par Actions Simplifiée (SAS).
        </p>
        <p className="legal-text">
          RCS Paris : 999 868 789 | Capital social : 100 €
        </p>
        <p className="legal-text">
          Siège social : CS 48756 – 58 rue de Monceau, 75008 Paris, France.
        </p>
        <p className="legal-text">
          Domiciliation : Les Tricolores (RCS 849 409 313).
        </p>
        <p className="legal-text">
          Date d'immatriculation : 23/01/2026 | EUID : FR7501.999868789 | Date de début d'activité : 15/01/2026.
        </p>
        <p className="legal-text">
          <strong>Présidente :</strong> Raphaëlle Tempez | <strong>Directeur Général :</strong> Victor Lefebvre.
        </p>
        <p className="legal-text">
          Email de contact : contact@betanovagroup.com
        </p>

        <h2 className="legal-section-title">2. Hébergement</h2>
        <p className="legal-text">
          Le site est hébergé par : <strong>Hostinger International Ltd</strong>
        </p>
        <p className="legal-text">
          61 Lordou Vironos Street, 6023 Larnaca, Chypre.
        </p>
        <p className="legal-text">
          Site : www.hostinger.fr | Téléphone : +370 645 03378.
        </p>

        <h2 className="legal-section-title">3. Propriété intellectuelle</h2>
        <p className="legal-text">
          L'ensemble des contenus présents sur le site (textes, images, graphismes, logos, vidéos, structure, etc.)
          est protégé par le droit de la propriété intellectuelle et est la propriété exclusive de HYPERNOVA,
          sauf mentions contraires. Toute reproduction, représentation, modification, publication, adaptation,
          totale ou partielle, est interdite sans autorisation écrite préalable.
        </p>

        <h2 className="legal-section-title">4. Données personnelles – RGPD</h2>
        <p className="legal-text">
          Les données personnelles collectées sont traitées conformément au Règlement (UE) 2016/679 (RGPD)
          et à la loi Informatique et Libertés.
        </p>
        <p className="legal-text">
          <strong>Responsable du traitement :</strong> Raphaëlle Tempez (Email : contact@betanovagroup.com | Tél : 06 95 37 31 60).
        </p>
        <p className="legal-text">
          Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition.
          Toute demande peut être adressée à l'adresse ci-dessus.
        </p>

        <h2 className="legal-section-title">5. Cookies</h2>
        <p className="legal-text">
          Le site peut utiliser des cookies à des fins de fonctionnement, de mesure d'audience et d'amélioration
          de l'expérience utilisateur. L'utilisateur peut configurer son navigateur pour refuser tout ou partie des cookies.
        </p>
      </div>
    </div>
  );
}
