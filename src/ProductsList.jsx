import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';


const PRODUCTS = [
  { id: 1, name: 'iPhone 15 Pro Max', price: 3499 },
  { id: 2, name: 'MacBook Pro M3', price: 4899 },
  { id: 3, name: 'PlayStation 5 Slim', price: 1599 },
  { id: 4, name: 'Samsung Galaxy S24 Ultra', price: 2999 },
  { id: 5, name: 'Dell XPS 15', price: 2799 },
  { id: 6, name: 'Nintendo Switch OLED', price: 499 },
  { id: 7, name: 'Google Pixel 8 Pro', price: 1999 },
  { id: 8, name: 'Sony WH-1000XM5 Headphones', price: 899 },
  { id: 9, name: 'Apple Watch Series 9', price: 1299 },
  { id: 10, name: 'Microsoft Surface Pro 9', price: 2399 },
];

export default function ProductsList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2 style={{ borderBottom: '2px solid #0056b3', paddingBottom: '10px' }}>პროდუქტები</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '15px' }}>
        {PRODUCTS.map(product => (
          <div key={product.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '6px', flex: '1', minWidth: '200px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{product.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#28a745', fontSize: '16px' }}>{product.price} ₾</p>
            <button 
              onClick={() => dispatch(addToCart(product))}
              style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', width: '100%', fontWeight: 'bold' }}
            >
              კალათაში დამატება
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}