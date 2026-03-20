import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <section id="new" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>New Collection</h2>
            <nav>
              <ul style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <li style={{ borderBottom: '2px solid var(--accent-terra)', paddingBottom: '0.5rem' }}><a href="#">All</a></li>
                <li><a href="#" style={{ color: 'var(--text-muted)' }}>Hoodies</a></li>
                <li><a href="#" style={{ color: 'var(--text-muted)' }}>Outerwear</a></li>
                <li><a href="#" style={{ color: 'var(--text-muted)' }}>Essentials</a></li>
              </ul>
            </nav>
          </div>
          <button className="glass" style={{ padding: '0.8rem 1.5rem', borderRadius: '4px', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>
            Filters
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
          {products.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
