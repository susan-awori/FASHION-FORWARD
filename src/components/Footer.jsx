import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0 3rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <div>
            <div className="logo" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>UNIS-STYLE™</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '300px', fontSize: '0.9rem' }}>
              Redefining gender-neutral premium essentials for the modern wardrobe. Sustainable, aesthetic, and functional.
            </p>
          </div>
          
          <div>
            <h4 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.8rem' }}>Shop</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.8rem' }}>Information</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              <li><a href="#">Sizing Guide</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
             <h4 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.8rem' }}>Connect</h4>
             <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>IG</a>
                <a href="#" className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TW</a>
                <a href="#" className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>FB</a>
             </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
          © 2026 UNIS-STYLE STUDIO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
