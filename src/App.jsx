import React from 'react';
import { Navbar } from './Navbar'; 
import LoginBox from './LoginBox';
import ProductsList from './ProductsList'; 
import Cart from './Cart';

export default function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif', padding: '20px', color: '#333' }}>
      <Navbar />
      
      <h1 style={{ textAlign: 'center', marginTop: '30px', color: '#0056b3' }}>ტექნიკის ონლაინ მაღაზია</h1>
      
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        <ProductsList />
        <Cart />
        <LoginBox />
      </div>
    </div>
  );
}