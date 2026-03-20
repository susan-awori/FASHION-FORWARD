import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Hero = ({ heroImage }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('#E2725B');

  const colorNames = {
    '#2D2D2D': 'Charcoal',
    '#E2725B': 'Terracotta',
    '#556B2F': 'Olive',
    '#F5F5DC': 'Cream'
  };

  const handleAddToCart = () => {
    addToCart({
      title: 'Collection Modern 01™',
      price: '$1,299.00',
      image: heroImage,
      selectedSize,
      selectedColor,
      selectedColorName: colorNames[selectedColor]
    });
  };

  return (
    <section className="hero fade-in" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="hero-content">
          <span style={{ textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem', display: 'block' }}>
            [ Series: UNIS-E1 // 01 ]
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.9, marginBottom: '2rem' }}>
            Collection<br />
            <span style={{ color: 'var(--accent-terra)' }}>Modern 01</span>™
          </h1>
          
          <div className="selectors" style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Size</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      border: selectedSize === size ? '2px solid var(--primary)' : '1px solid #ddd', 
                      borderRadius: '4px', 
                      fontSize: '0.85rem',
                      fontWeight: selectedSize === size ? 800 : 400,
                      backgroundColor: selectedSize === size ? 'white' : 'transparent'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Colour</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['#2D2D2D', '#E2725B', '#556B2F', '#F5F5DC'].map(color => (
                  <button 
                    key={color} 
                    onClick={() => setSelectedColor(color)}
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      backgroundColor: color, 
                      border: '2px solid white', 
                      boxShadow: selectedColor === color ? '0 0 0 2px var(--primary)' : '0 0 0 1px #ddd',
                      transform: selectedColor === color ? 'scale(1.2)' : 'scale(1)'
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button 
              onClick={handleAddToCart}
              style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1.2rem 2.5rem', borderRadius: '100px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Add to Cart
            </button>
            <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>$1,299.00</span>
          </div>
        </div>
        
        <div className="hero-image" style={{ position: 'relative' }}>
          <img src={heroImage} alt="Main Collection Puffer" style={{ width: '100%', height: 'auto', borderRadius: '24px', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', display: 'flex', gap: '0.5rem' }}>
             <button className="glass" style={{ padding: '1rem', borderRadius: '50%' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
