import React from 'react';
import './LegalPage.css';

export default function CGV() {
  return (
    <div className="legal-wrapper">
      <div className="legal-container">
        <h1 className="legal-title">Conditions Générales de Vente (CGV)</h1>

        {/* SECTION 1: Service Description */}
        <h2 className="legal-section-title">1. Description du Service</h2>
        <p className="legal-text">
          <strong>HYPERNOVA</strong> est un service d'accompagnement ponctuel en visio ou par téléphone, dédié aux problématiques e-commerce et Amazon nécessitant une réponse rapide et experte.
        </p>
        <p className="legal-text">
          Nous intervenons sur des sujets non récurrents : ouverture de compte seller central Amazon, décisions stratégiques, blocages, arbitrages, lancement, conformité ou performance.
        </p>
        <p className="legal-text">
          Chaque session est assurée par un expert Amazon de <strong>BETANOVA Consulting</strong> et en partenariat exclusif avec le cabinet <strong>FENCHELL</strong>. Étant agence partenaire Amazon, nos solutions sont directement liées à notre expertise et proximité avec notre account manager dédié chez Amazon.
        </p>

        {/* SECTION 2: Account Creation & Guarantees */}
        <h2 className="legal-section-title">2. Création de Compte Vendeur (Partenariat Fenchell)</h2>

        <p className="legal-text">
          <strong>2.1 Objectif :</strong> Enregistrer l'entreprise du Client sur une plateforme commerciale.
          <strong>HYPERNOVA (partenaire Fenchell)</strong> agit en intermédiaire avec les documents fournis par le Client,
          sans garantir l'activation du compte, décision relevant de la Place de Marché.
        </p>

        <p className="legal-text">
          <strong>2.2 Garanties :</strong> En cas de non-activation du compte vendeur, un remboursement complet peut être
          demandé entre 45 et 90 jours après soumission des documents. Si le compte est ultérieurement désactivé par la
          Place de Marché, aucun remboursement n'est effectué, mais un Plan d'Action peut être proposé moyennant frais.
        </p>
      </div>
    </div>
  );
}
