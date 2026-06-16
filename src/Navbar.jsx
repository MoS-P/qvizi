import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from './authSlice';

export function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#0056b3', color: 'white', borderRadius: '8px' }}>
      <h2 style={{ margin: 0, fontSize: '20px' }}>⚡ TechStore</h2>
      <div>
        {isAuthenticated ? (
          <>
            <span>მოგესალმები, <strong>{user.name}</strong>! </span>
            <button 
              onClick={() => dispatch(logoutSuccess())} 
              style={{ marginLeft: '15px', padding: '5px 10px', background: '#fff', color: '#0056b3', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              გამოსვლა
            </button>
          </>
        ) : (
          <span style={{ fontSize: '14px' }}>გთხოვთ გაიაროთ ავტორიზაცია</span>
        )}
      </div>
    </nav>
  );
}