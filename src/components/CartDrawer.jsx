import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  React.useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('cart-drawer-open');
    } else {
      document.body.classList.remove('cart-drawer-open');
    }
    return () => document.body.classList.remove('cart-drawer-open');
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div 
      className="cart-overlay" 
      onClick={() => setIsCartOpen(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
        transition: 'var(--transition)'
      }}
    >
      <div 
        className="cart-drawer" 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '450px',
          height: '100%',
          background: 'var(--bg-main)',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
          animation: 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Shopping Bag</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Close
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '2rem' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)' }}>
              <p>Your bag is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{ marginTop: '1.5rem', textDecoration: 'underline', fontWeight: 600 }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '100px', height: '130px', borderRadius: '12px', overflow: 'hidden', background: '#eee' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.title}</h3>
                      <button onClick={() => removeFromCart(item.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      {item.selectedSize} / {item.selectedColorName || item.selectedColor}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #ddd', borderRadius: '4px', padding: '0.25rem 0.5rem' }}>
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span style={{ fontSize: '0.85rem', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                      <span style={{ fontWeight: 800 }}>{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div style={{ borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <span style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem' }}>Subtotal</span>
              <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              style={{ 
                width: '100%', 
                backgroundColor: 'var(--primary)', 
                color: 'white', 
                padding: '1.2rem', 
                borderRadius: '100px', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em' 
              }}
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
