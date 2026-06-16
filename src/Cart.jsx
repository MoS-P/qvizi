import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from './cartSlice'; 

export default function Cart() {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', marginTop: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>სავაჭრო კალათა ({totalQuantity} ნივთი)</h2>
      
      {items.length === 0 ? (
        <p style={{ color: '#666' }}>კალათა ცარიელია.</p>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {items.map(item => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <div style={{ flexGrow: 1 }}>
                  <strong>{item.name}</strong> — {item.price} ₾ x {item.quantity}
                </div>
                <div>
                  <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginRight: '5px', padding: '2px 8px' }}>-</button>
                  <button onClick={() => dispatch(addToCart(item))} style={{ padding: '2px 8px' }}>+</button>
                </div>
              </li>
            ))}
          </ul>
          
          <h3 style={{ color: '#333' }}>სულ ჯამი: <span style={{ color: '#28a745' }}>{totalPrice} ₾</span></h3>
          <button 
            onClick={() => dispatch(clearCart())}
            style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
          >
            კალათის გასუფთავება
          </button>
        </div>
      )}
    </div>
  );
}