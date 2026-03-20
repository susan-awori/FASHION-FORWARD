import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  const products = [
    {
      image: '/assets/product_charcoal_hoodie_1773831977657.png',
      category: 'Hoodies',
      title: 'Oversized Charcoal Hoodie',
      price: '$180.00',
      colors: ['#2D2D2D', '#F5F5DC']
    },
    {
      image: '/assets/product_olive_jacket_1773832231952.png',
      category: 'Outerwear',
      title: 'Quilted Utility Jacket',
      price: '$320.00',
      colors: ['#556B2F', '#2D2D2D']
    },
    {
      image: '/assets/product_cream_sweater_1773832373501.png',
      category: 'Essentials',
      title: 'Heavy-Knit Wool Sweater',
      price: '$210.00',
      colors: ['#F5F5DC', '#E2725B']
    },
    {
      image: '/assets/product_terracotta_windbreaker_1773832615000.png',
      category: 'Outerwear',
      title: 'Technical Windbreaker',
      price: '$290.00',
      colors: ['#E2725B', '#2D2D2D']
    },
    {
      image: '/assets/product_offwhite_pants_1773833128520.png',
      category: 'Bottoms',
      title: 'Tech Relaxed Trousers',
      price: '$240.00',
      colors: ['#FAFAF9', '#2D2D2D']
    }
  ];

  const heroImage = '/assets/hero_terracotta_puffer_1773831962802.png';

  return (
    <div className="App">
      <Header />
      <main>
        <Hero heroImage={heroImage} />
        <ProductGrid products={products} />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default App;
