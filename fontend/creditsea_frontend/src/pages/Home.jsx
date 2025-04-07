// src/pages/Home.jsx
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to CreditSea 🚀</h1>

        {user ? (
          <>
            <p className="mb-2">👋 Hello, <strong>{user.name}</strong></p>
            <p className="mb-4">🎭 Role: <strong>{user.role}</strong></p>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="flex gap-4">
              <a
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </a>
              <a
                href="/register"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Register
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
