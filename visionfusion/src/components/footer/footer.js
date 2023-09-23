import React from 'react';
import './footer.css';

const teamMembers = [
  'Vinayak N Magajikondi',
  'Krishna L',
  'Shreyas S Rao',
  'Meenakshi G Patil',
];

export default function Footer() {
  return (
    <div className="footer-container" style={{ color: 'olive' }}>
      <h1>Our Team</h1>
      <div className="team-member-names">
        {teamMembers.map((member, index) => (
          <p key={index}>{member}</p>
        ))}
      </div>
      <p className="website-name">Digit-Ally</p>
    </div>
  );
}
