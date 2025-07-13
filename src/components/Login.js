import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded login validation
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8, backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 5 }}
            required
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 5 }}
            required
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 15 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 10, backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
