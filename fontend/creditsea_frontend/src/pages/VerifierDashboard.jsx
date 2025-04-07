


// import { useEffect, useState } from 'react';
// import { FaUser, FaMoneyBill, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// function VerifierDashboard() {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState('');

//   const token = localStorage.getItem('accessToken');

//   const fetchLoans = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/loans/all', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Failed to fetch loans');
//       setLoans(data.loans);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleAction = async (id, action) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/loans/${action}/${id}`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);
//       fetchLoans(); // Refresh list
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchLoans();
//   }, []);

//   const cards = [
//     { label: 'Pending Loans', value: loans.length, icon: <FaUser /> },
//     { label: 'Total Amount', value: `₹${loans.reduce((sum, loan) => sum + loan.amount, 0)}`, icon: <FaMoneyBill /> },
//     { label: 'Verified', value: loans.filter(l => l.status === 'verified').length, icon: <FaCheckCircle /> },
//     { label: 'Rejected', value: loans.filter(l => l.status === 'rejected').length, icon: <FaTimesCircle /> },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-green-900 text-white flex flex-col p-4">
//         <h1 className="text-2xl font-bold mb-6">CREDIT APP</h1>
//         <nav className="flex-1 space-y-4">
//           <a href="#" className="block hover:bg-green-700 p-2 rounded">Dashboard</a>
//           <a href="#" className="block hover:bg-green-700 p-2 rounded">Loans</a>
//           <a href="#" className="block hover:bg-green-700 p-2 rounded">Logout</a>
//         </nav>
//       </aside>

//       {/* Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <h2 className="text-xl font-bold text-green-900">Verifier Dashboard</h2>
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-600">Verifier</span>
//             <img src="https://via.placeholder.com/30" alt="Avatar" className="rounded-full" />
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="p-6 flex-1 overflow-auto">
//           {/* Stat Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center gap-4 p-4 rounded shadow ${index % 2 === 0 ? "bg-green-800 text-white" : "bg-white"}`}
//               >
//                 <div className="text-3xl">{card.icon}</div>
//                 <div>
//                   <p className="text-lg font-bold">{card.value}</p>
//                   <p className="text-sm uppercase tracking-wide">{card.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Loan Table */}
//           <div className="bg-white shadow-md rounded-lg overflow-x-auto">
//             <h3 className="text-xl font-bold p-4 border-b">Pending Loan Applications</h3>
//             {error && <p className="text-red-500 px-4 pt-4">{error}</p>}
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
//                 <tr>
//                   <th className="px-6 py-3 text-left">Full Name</th>
//                   <th className="px-6 py-3 text-left">Amount</th>
//                   <th className="px-6 py-3 text-left">Tenure</th>
//                   <th className="px-6 py-3 text-left">Status</th>
//                   <th className="px-6 py-3 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//   {loans.filter((loan) => loan.status !== 'rejected').map((loan) => (
//     <tr key={loan._id} className="hover:bg-gray-50 transition">
//       <td className="px-6 py-4">{loan.fullName}</td>
//       <td className="px-6 py-4">₹{loan.amount}</td>
//       <td className="px-6 py-4">{loan.loanTenure} months</td>
//       <td className="px-6 py-4 font-medium text-yellow-600">{loan.status}</td>
//       <td className="px-6 py-4 flex justify-center space-x-2">
//         <button
//           onClick={() => handleAction(loan._id, 'verify')}
//           className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
//         >
//           Verify
//         </button>
//         <button
//           onClick={() => handleAction(loan._id, 'reject')}
//           className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
//         >
//           Reject
//         </button>
//       </td>
//     </tr>
//   ))}
//   {loans.filter((loan) => loan.status !== 'rejected').length === 0 && (
//     <tr>
//       <td colSpan="5" className="text-center py-6 text-gray-500">
//         No pending loan applications found.
//       </td>
//     </tr>
//   )}
// </tbody>

//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default VerifierDashboard;
import { useEffect, useState } from 'react';
import { FaUser, FaMoneyBill, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function VerifierDashboard() {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState('');

  const token = localStorage.getItem('accessToken');

  const fetchLoans = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/loans/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to fetch loans');
      setLoans(data.loans);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAction = async (id, action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/loans/${action}/${id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      fetchLoans(); // Refresh list
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  const cards = [
    { label: 'Pending Loans', value: loans.length, icon: <FaUser /> },
    { label: 'Total Amount', value: `₹${loans.reduce((sum, loan) => sum + loan.amount, 0)}`, icon: <FaMoneyBill /> },
    { label: 'Verified', value: loans.filter(l => l.status === 'verified').length, icon: <FaCheckCircle /> },
    { label: 'Rejected', value: loans.filter(l => l.status === 'rejected').length, icon: <FaTimesCircle /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-6">CREDIT APP</h1>
        <nav className="flex-1 space-y-4">
          <a href="#" className="block hover:bg-green-700 p-2 rounded">Dashboard</a>
          <a href="#" className="block hover:bg-green-700 p-2 rounded">Loans</a>
          <a href="#" className="block hover:bg-green-700 p-2 rounded">Logout</a>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-green-900">Verifier Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Verifier</span>
            <img src="https://via.placeholder.com/30" alt="Avatar" className="rounded-full" />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 flex-1 overflow-auto">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded shadow ${index % 2 === 0 ? "bg-green-800 text-white" : "bg-white"}`}
              >
                <div className="text-3xl">{card.icon}</div>
                <div>
                  <p className="text-lg font-bold">{card.value}</p>
                  <p className="text-sm uppercase tracking-wide">{card.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Loan Table */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <h3 className="text-xl font-bold p-4 border-b">Pending Loan Applications</h3>
            {error && <p className="text-red-500 px-4 pt-4">{error}</p>}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Full Name</th>
                  <th className="px-6 py-3 text-left">Amount</th>
                  <th className="px-6 py-3 text-left">Tenure</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>

              {/* ✅ Updated <tbody> to show only pending loans */}
              <tbody className="divide-y divide-gray-200">
                {loans.filter((loan) => loan.status?.toLowerCase() === 'pending').map((loan) => (
                  <tr key={loan._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{loan.fullName}</td>
                    <td className="px-6 py-4">₹{loan.amount}</td>
                    <td className="px-6 py-4">{loan.loanTenure} months</td>
                    <td className="px-6 py-4 font-medium text-yellow-600">{loan.status}</td>
                    <td className="px-6 py-4 flex justify-center space-x-2">
                      <button
                        onClick={() => handleAction(loan._id, 'verify')}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
                      >
                        Verify
                      </button>
                      <button
                        onClick={() => handleAction(loan._id, 'reject')}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
                {loans.filter((loan) => loan.status?.toLowerCase() === 'pending').length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">
                      No pending loan applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default VerifierDashboard;
