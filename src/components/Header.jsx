import React from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '1.5rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          FASHION-FORWARD
        </div>
        
        <nav>
          <ul style={{ display: 'flex', gap: '2.5rem', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>
            <li><a href="#new">New In</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#essentials">Essentials</a></li>
            <li><a href="#accessories">Accessories</a></li>
            <li><a href="#archive">Archive</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="utils" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button 
            aria-label="Cart" 
            onClick={() => setIsCartOpen(true)}
            style={{ position: 'relative' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--accent-terra)', color: 'white', fontSize: '0.65rem', padding: '2px 5px', borderRadius: '50%' }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
