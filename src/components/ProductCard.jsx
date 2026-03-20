import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ image, category, title, price, colors }) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      image,
      category,
      title,
      price,
      selectedColor,
      selectedSize: 'M' // Default size for quick add
    });
  };

  return (
    <div className="product-card" style={{ transition: 'var(--transition)', position: 'relative' }}>
      <div 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          borderRadius: '16px', 
          backgroundColor: '#f0f0f0', 
          aspectRatio: '3/4', 
          marginBottom: '1.5rem',
          group: 'true' // For hover effects
        }}
        className="product-image-container"
      >
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
        />
        
        {/* Hover Actions */}
        <div style={{ 
          position: 'absolute', 
          bottom: '1rem', 
          left: '1rem', 
          right: '1rem', 
          display: 'flex', 
          gap: '0.5rem',
          transform: 'translateY(120%)',
          transition: 'transform 0.3s ease',
          zIndex: 10
        }} className="hover-actions">
          <button 
            onClick={handleAddToCart}
            style={{ 
              flex: 1, 
              backgroundColor: 'var(--primary)', 
              color: 'white', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              fontSize: '0.7rem', 
              fontWeight: 600, 
              textTransform: 'uppercase' 
            }}
          >
            Quick Add
          </button>
        </div>

        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
           <button className="glass" style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
           </button>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{category}</span>
          <h3 style={{ fontSize: '1rem', marginTop: '0.25rem', fontWeight: 600 }}>{title}</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
             {colors.map(c => (
               <button 
                 key={c} 
                 onClick={() => setSelectedColor(c)}
                 style={{ 
                   width: '12px', 
                   height: '12px', 
                   borderRadius: '50%', 
                   backgroundColor: c,
                   border: selectedColor === c ? '1px solid var(--primary)' : 'none',
                   padding: 0,
                   boxShadow: selectedColor === c ? '0 0 0 1px white, 0 0 0 2px var(--primary)' : 'none'
                 }}
               ></button>
             ))}
          </div>
        </div>
        <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
