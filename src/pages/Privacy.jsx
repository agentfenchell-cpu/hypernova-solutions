import "./LegalPage.css";

export default function Privacy() {
  return (
    <div className="legal-wrapper">
      <div className="legal-container">
        <h1 className="legal-title">Politique de Confidentialité</h1>
        <p className="legal-text" style={{ fontStyle: "italic", marginBottom: "2rem" }}>
          Dernière mise à jour : 29 janvier 2026
        </p>

        <h2 className="legal-section-title">1. Responsable du traitement</h2>
        <p className="legal-text">
          HYPERNOVA SAS. Siège : CS 48756 – 58 rue de Monceau, 75008 Paris.
          Email : contact@betanovagroup.com. DPO : Raphaëlle Tempez.
        </p>

        <h2 className="legal-section-title">2. Données collectées</h2>
        <p className="legal-text">
          Nous collectons uniquement les données strictement nécessaires : Nom et prénom, Email, Téléphone,
          Nom de l'entreprise, Infos formulaires, Données de navigation (cookies, IP).
        </p>

        <h2 className="legal-section-title">3. Finalités du traitement</h2>
        <p className="legal-text">
          Répondre aux demandes ; Recontacter pour audit/devis ; Relation commerciale ;
          Amélioration UX ; Obligations légales.
        </p>

        <h2 className="legal-section-title">4. Base légale</h2>
        <p className="legal-text">
          Consentement, exécution contractuelle, intérêt légitime, obligations légales.
        </p>

        <h2 className="legal-section-title">5. Durée de conservation</h2>
        <p className="legal-text">
          Prospects : 12 mois. Clients : durée contractuelle + 5 ans. Cookies : 13 mois.
        </p>

        <h2 className="legal-section-title">6. Destinataires</h2>
        <p className="legal-text">
          Exclusivement HYPERNOVA et sous-traitants techniques (hébergement, CRM). Aucune vente à des tiers.
        </p>

        <h2 className="legal-section-title">7. Sécurité</h2>
        <p className="legal-text">
          Mesures techniques et organisationnelles pour garantir la confidentialité.
        </p>

        <h2 className="legal-section-title">8. Vos droits</h2>
        <p className="legal-text">
          Accès, rectification, effacement, limitation, opposition.
          Contact : Raphaëlle Tempez (contact@betanovagroup.com). Réclamation auprès de la CNIL.
        </p>

        <h2 className="legal-section-title">9. Cookies</h2>
        <p className="legal-text">
          Cookies fonctionnels et de mesure d'audience. Paramétrable via navigateur.
        </p>
      </div>
    </div>
  );
}
