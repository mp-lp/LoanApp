


import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'; // ✅ import context

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ get login method from context

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      login(data.accessToken); // ✅ update context and store tokens

      const role = data.user.role.toLowerCase(); // normalize role to avoid mismatch

      // ✅ Redirect based on role
      switch (role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'verifier':
          navigate('/verifier');
          break;
        default:
          navigate('/my-loans');
      }

    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
  
        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
  
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-3 px-3 py-2 border rounded"
        />
  
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-3 px-3 py-2 border rounded"
        />
  
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
  
        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
  



export default Login;
