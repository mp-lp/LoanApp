// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import { AuthProvider } from './Context/AuthContext';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;



// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import VerifierDashboard from './pages/VerifierDashboard';
import ApplyLoan from './pages/ApplyLoan';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';
import MyLoans from './pages/MyLoan';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/verifier"
            element={
              <ProtectedRoute allowedRoles={['Verifier']}>
                <VerifierDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/apply-loan"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <ApplyLoan />
              </ProtectedRoute>
            }
          />
        <Route
           path="/my-loans"
           element={
           <ProtectedRoute allowedRoles={['user']}>
             <MyLoans />
    </ProtectedRoute>
  }
/>
        </Routes>
    
      </Router>
    </AuthProvider>
  );
}

export default App;

// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import AdminDashboard from './pages/AdminDashboard';
// import VerifierDashboard from './pages/VerifierDashboard';
// import MyLoans from './pages/MyLoans';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/verifier" element={<VerifierDashboard />} />
//         <Route path="/my-loans" element={<MyLoans />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
