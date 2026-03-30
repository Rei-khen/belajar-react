import React from 'react';
import { COLORS } from '../constants/data';

const PackageCard = ({ pkg }) => {
  const isPremium = pkg.isPremium;
  
  const cardStyle = {
    backgroundColor: isPremium ? COLORS.navy : COLORS.white,
    color: isPremium ? COLORS.softWhite : COLORS.navy,
    padding: '40px',
    borderRadius: '8px',
    border: `2px solid ${isPremium ? COLORS.gold : COLORS.dustyRose}`,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: isPremium ? '0 10px 20px rgba(0,0,128,0.2)' : 'none'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0', color: isPremium ? COLORS.gold : COLORS.navy }}>{pkg.name}</h3>
      <p style={{ fontStyle: 'italic', fontSize: '0.8rem', marginBottom: '20px', opacity: 0.7 }}>"{pkg.tagline}"</p>
      <ul style={{ listStyle: 'none', padding: 0, flexGrow: 1 }}>
        {pkg.features.map((f, i) => (
          <li key={i} style={{ marginBottom: '10px', fontSize: '0.85rem' }}>
            <span style={{ color: isPremium ? COLORS.gold : COLORS.dustyRose, marginRight: '8px' }}>✦</span>
            {f}
          </li>
        ))}
      </ul>
      <button style={{
        marginTop: '20px',
        backgroundColor: isPremium ? COLORS.gold : 'transparent',
        color: isPremium ? COLORS.navy : COLORS.navy,
        border: `1px solid ${isPremium ? COLORS.gold : COLORS.navy}`,
        padding: '12px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        PILIH PAKET
      </button>
    </div>
  );
};

export default PackageCard;