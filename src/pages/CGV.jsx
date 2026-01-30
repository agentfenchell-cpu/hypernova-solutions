import "./LegalPage.css";

export default function CGV() {
  return (
    <div className="legal-wrapper">
      <div className="legal-container">
        <h1 className="legal-title">Conditions Générales de Vente (CGV)</h1>

        <h2 className="legal-section-title">Service : Création de Compte Vendeur Amazon</h2>

        <h2 className="legal-section-title">5.2 Création de Compte Vendeur</h2>

        <h3 className="legal-section-title" style={{ fontSize: "1.1rem", marginTop: "20px" }}>5.2.1 Objectif</h3>
        <p className="legal-text">
          Enregistrer l'entreprise du Client sur une plateforme commerciale. HYPERNOVA (partenaire Fenchell)
          agit en intermédiaire avec les documents fournis par le Client, sans garantir l'activation du compte,
          décision relevant de la Place de Marché.
        </p>

        <h3 className="legal-section-title" style={{ fontSize: "1.1rem", marginTop: "20px" }}>5.2.2 Garanties</h3>
        <p className="legal-text">
          En cas de non-activation du compte vendeur, un remboursement complet peut être demandé entre
          45 et 90 jours après soumission des documents.
        </p>
        <p className="legal-text">
          Si le compte est ultérieurement désactivé par la Place de Marché, aucun remboursement n'est effectué,
          mais un Plan d'Action peut être proposé moyennant frais.
        </p>
      </div>
    </div>
  );
}
