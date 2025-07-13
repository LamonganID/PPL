import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import BookManager from './components/BookManager';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/library" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/library"
          element={isLoggedIn ? <BookManager /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/library" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
