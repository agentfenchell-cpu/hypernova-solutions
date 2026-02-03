import React from 'react';
import fenchellLogo from '../assets/Logo-Fenchell.svg';
import amazonLogo from '../assets/Amazon-Logo.png';
import './Partners.css';

export default function Partners() {
  return (
    <section className="partners-section">
      <p className="partners-label">ECOSYSTÈME & PARTENAIRES</p>
      <div className="partners-logos">
        {/* Amazon Logo (Consulting Expertise) */}
        <img src={amazonLogo} alt="Amazon Expertise" className="partner-logo amazon-fix" />

        {/* Divider */}
        <div className="partner-divider"></div>

        {/* Fenchell Logo (Official Partner) */}
        <img src={fenchellLogo} alt="Fenchell Partner" className="partner-logo" />
      </div>
    </section>
  );
}
