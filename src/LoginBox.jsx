import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './authSlice';

export default function LoginBox() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const User = { id: 1, name: "Saba", email: "saba@example.com" };

    dispatch(loginSuccess(User));
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '20px', backgroundColor: '#fff' }}>
      <h3>სისტემაში შესვლა (ტექნიკის ბაზა)</h3>
      <p style={{ fontSize: '14px', color: '#666' }}>პერსონალური ფასდაკლებების მისაღებად გაიარეთ ავტორიზაცია.</p>
      <button 
        onClick={handleLogin}
        style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
      >
        შესვლა
      </button>
    </div>
  );
}