import React from 'react';
import PackageCard from '../components/PackageCard';
import { COLORS, WEDDING_PACKAGES } from '../constants/data';

// Komponen Lokal sederhana untuk Header & Footer
const Navbar = () => (
  <nav style={{ backgroundColor: COLORS.navy, padding: '20px 50px', color: COLORS.gold, textAlign: 'center' }}>
    <h1 style={{ margin: 0, letterSpacing: '4px' }}>DUNIA KITA</h1>
  </nav>
);

const WeddingPage = () => {
  return (
    <div style={{ backgroundColor: COLORS.softWhite, minHeight: '100vh', fontFamily: 'serif' }}>
      <Navbar />
      
      <header style={{ backgroundColor: COLORS.navy, color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ color: COLORS.gold }}>Wujudkan Awal Sempurna Cerita Anda</h2>
        <p>Karena setiap cinta memiliki dunianya sendiri.</p>
      </header>

      <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {WEDDING_PACKAGES.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: COLORS.navy, opacity: 0.6 }}>
        <p>© 2026 Dunia Kita</p>
      </footer>
    </div>
  );
};

export default WeddingPage;