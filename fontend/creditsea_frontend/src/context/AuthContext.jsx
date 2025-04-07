// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
        // alert("Decoded JWT on load:", decoded);

      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('accessToken');
        setUser(null);
      }
    }
  }, []);
  

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem('accessToken', token);
      setUser(decoded);
    } catch (err) {
      console.error('Failed to decode token:', err);
    }
  };
  
  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
