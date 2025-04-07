// import { useEffect, useState } from 'react';

// function AdminDashboard() {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState('');

//   const token = localStorage.getItem('accessToken');

//   const fetchLoans = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/loans/all', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
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
//           Authorization: `Bearer ${token}`
//         }
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);

//       fetchLoans(); // Refresh loans
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchLoans();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Manage Loans</h1>

//       {error && <p className="text-red-500">{error}</p>}

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded">
//           <thead className="bg-gray-200 text-left">
//             <tr>
//               <th className="py-2 px-4">User</th>
//               <th className="py-2 px-4">Amount</th>
//               <th className="py-2 px-4">Purpose</th>
//               <th className="py-2 px-4">Status</th>
//               <th className="py-2 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loans.map((loan) => (
//               <tr key={loan._id} className="border-t">
//                 <td className="py-2 px-4">{loan.user?.name || 'N/A'}</td>
//                 <td className="py-2 px-4">{loan.amount}</td>
//                 <td className="py-2 px-4">{loan.purpose}</td>
//                 <td className="py-2 px-4">{loan.status}</td>
//                 <td className="py-2 px-4 space-x-2">
//                   {loan.status === 'verified' && (
//                     <>
//                       <button
//                         className="bg-green-500 text-white px-3 py-1 rounded"
//                         onClick={() => handleAction(loan._id, 'approve')}
//                       >
//                         Approve
//                       </button>
//                       <button
//                         className="bg-red-500 text-white px-3 py-1 rounded"
//                         onClick={() => handleAction(loan._id, 'reject')}
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}
//                   {loan.status === 'approved' && <span className="text-green-600">Approved</span>}
//                   {loan.status === 'rejected' && <span className="text-red-600">Rejected</span>}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;














// import { useEffect, useState } from 'react';

// function AdminDashboard() {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('accessToken');

//   const fetchLoans = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/loans/all', {
//         headers: { Authorization: `Bearer ${token}` }
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
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);
//       fetchLoans();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchLoans();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-green-800 text-white p-6 space-y-6">
//         <div className="text-2xl font-bold">CREDIT APP</div>
//         <div className="font-medium text-lg">John Doe</div>
//         <nav className="space-y-4 text-sm mt-6">
//           {[
//             'Dashboard', 'Borrowers', 'Loans', 'Repayments', 'Loan Parameters',
//             'Accounting', 'Reports', 'Collateral', 'Access Configuration',
//             'Savings', 'Other Incomes', 'Payroll', 'Expenses',
//             'Investor Accounts', 'Calendar', 'Settings', 'Sign Out'
//           ].map((item) => (
//             <a key={item} href="#" className="block hover:text-green-300">{item}</a>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h2 className="text-gray-700 font-semibold text-lg">ADMIN - DASHBOARD</h2>
//           <div className="flex items-center space-x-4">
//             <button className="relative">
//               <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2"
//                 viewBox="0 0 24 24">
//                 <path d="M15 17h5l-1.405-1.405M19.595 15.595A2.032 2.032 0 0121 13.5V11c0-3.037-1.538-5.735-4.08-7.333A9.985 9.985 0 0012 2a9.985 9.985 0 00-4.92 1.667C4.538 5.265 3 7.963 3 11v2.5c0 .637.253 1.246.705 1.695L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//             </button>
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2"
//               viewBox="0 0 24 24">
//               <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-6 0h6m-6 0H5a2 2 0 01-2-2V10a2 2 0 012-2h2m6 0H9" />
//             </svg>
//             <div className="text-gray-700 font-medium">Admin ⌄</div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-8">
//           <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//             <StatCard title="ACTIVE USERS" value="200" />
//             <StatCard title="BORROWERS" value="100" />
//             <StatCard title="CASH DISBURSED" value="550,000" />
//             <StatCard title="CASH RECEIVED" value="1,000,000" />
//             <StatCard title="SAVINGS" value="450,000" />
//             <StatCard title="REPAID LOANS" value="30" />
//             <StatCard title="OTHER ACCOUNTS" value="10" />
//             <StatCard title="LOANS" value="50" />
//           </div>

//           {/* Recent Loans Table */}
//          {/* Loan Table */}
// <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-8">
//   <h3 className="text-xl font-bold p-4 border-b text-green-800">Pending Loan Applications</h3>
//   {error && <p className="text-red-500 px-4 pt-4">{error}</p>}
//   <table className="min-w-full divide-y divide-gray-200">
//     <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
//       <tr>
//         <th className="px-6 py-3 text-left">Full Name</th>
//         <th className="px-6 py-3 text-left">Amount</th>
//         <th className="px-6 py-3 text-left">Tenure</th>
//         <th className="px-6 py-3 text-left">Status</th>
//         <th className="px-6 py-3 text-center">Actions</th>
//       </tr>
//     </thead>
//     <tbody className="divide-y divide-gray-200">
//   {loans
//     .filter(loan =>
//       ['pending', 'verified'].includes(loan.status?.toLowerCase())
//     )
//     .map((loan) => (
//       <tr key={loan._id} className="hover:bg-gray-50 transition">
//         <td className="px-6 py-4">{loan.fullName || loan.user?.name || 'N/A'}</td>
//         <td className="px-6 py-4">₹{loan.amount}</td>
//         <td className="px-6 py-4">{loan.loanTenure} months</td>
//         <td className={`px-6 py-4 font-medium ${
//           loan.status === 'approved'
//             ? 'text-green-600'
//             : loan.status === 'rejected'
//             ? 'text-red-600'
//             : 'text-yellow-600'
//         }`}>
//           {loan.status}
//         </td>
//         <td className="px-6 py-4 flex justify-center space-x-2">
//           {loan.status.toLowerCase() === 'verified' && (
//             <>
//               <button
//                 onClick={() => handleAction(loan._id, 'approve')}
//                 className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={() => handleAction(loan._id, 'reject')}
//                 className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
//               >
//                 Reject
//               </button>
//             </>
//           )}
//           {loan.status.toLowerCase() === 'pending' && (
//             <span className="text-yellow-700 font-semibold">Pending</span>
//           )}
//         </td>
//       </tr>
//     ))}
//   {loans.filter(loan =>
//     ['pending', 'verified'].includes(loan.status?.toLowerCase())
//   ).length === 0 && (
//     <tr>
//       <td colSpan="5" className="text-center py-6 text-gray-500">
//         No pending or verified loan applications found.
//       </td>
//     </tr>
//   )}
// </tbody>

//   </table>
// </div>

//         </div>
//       </main>
//     </div>
//   );
// }

// const StatCard = ({ title, value }) => (
//   <div className="bg-white rounded shadow p-4 text-center">
//     <h3 className="text-sm font-semibold text-gray-700 uppercase">{title}</h3>
//     <p className="text-2xl font-bold text-green-700 mt-2">{value}</p>
//   </div>
// );

// const statusColor = (status) => {
//   switch (status) {
//     case 'approved':
//       return 'bg-green-600';
//     case 'rejected':
//       return 'bg-red-600';
//     case 'pending':
//       return 'bg-yellow-500';
//     case 'verified':
//       return 'bg-blue-600';
//     default:
//       return 'bg-gray-400';
//   }
// };

// export default AdminDashboard;








// import { useEffect, useState } from 'react';

// function AdminDashboard() {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('accessToken');

//   const fetchLoans = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/loans/all', {
//         headers: { Authorization: `Bearer ${token}` },
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
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);
//       fetchLoans();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchLoans();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-green-800 text-white p-6 space-y-6">
//         <div className="text-2xl font-bold">CREDIT APP</div>
//         <div className="font-medium text-lg">John Doe</div>
//         <nav className="space-y-4 text-sm mt-6">
//           {[
//             'Dashboard', 'Borrowers', 'Loans', 'Repayments', 'Loan Parameters',
//             'Accounting', 'Reports', 'Collateral', 'Access Configuration',
//             'Savings', 'Other Incomes', 'Payroll', 'Expenses',
//             'Investor Accounts', 'Calendar', 'Settings', 'Sign Out',
//           ].map((item) => (
//             <a key={item} href="#" className="block hover:text-green-300">
//               {item}
//             </a>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h2 className="text-gray-700 font-semibold text-lg">ADMIN - DASHBOARD</h2>
//           <div className="flex items-center space-x-4">
//             <button className="relative">
//               <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M15 17h5l-1.405-1.405M19.595 15.595A2.032 2.032 0 0121 13.5V11c0-3.037-1.538-5.735-4.08-7.333A9.985 9.985 0 0012 2a9.985 9.985 0 00-4.92 1.667C4.538 5.265 3 7.963 3 11v2.5c0 .637.253 1.246.705 1.695L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//             </button>
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-6 0h6m-6 0H5a2 2 0 01-2-2V10a2 2 0 012-2h2m6 0H9" />
//             </svg>
//             <div className="text-gray-700 font-medium">Admin ⌄</div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-8">
//           <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//             <StatCard title="ACTIVE USERS" value="200" />
//             <StatCard title="BORROWERS" value="100" />
//             <StatCard title="CASH DISBURSED" value="550,000" />
//             <StatCard title="CASH RECEIVED" value="1,000,000" />
//             <StatCard title="SAVINGS" value="450,000" />
//             <StatCard title="REPAID LOANS" value="30" />
//             <StatCard title="OTHER ACCOUNTS" value="10" />
//             <StatCard title="LOANS" value="50" />
//           </div>

//           {/* Loan Table */}
//           <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-8">
//             <h3 className="text-xl font-bold p-4 border-b text-green-800">Pending Loan Applications</h3>
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
//                 {loans
//                   .filter((loan) => ['pending', 'verified'].includes(loan.status?.toLowerCase()))
//                   .map((loan) => (
//                     <tr key={loan._id} className="hover:bg-gray-50 transition">
//                       <td className="px-6 py-4">{loan.fullName || loan.user?.name || 'N/A'}</td>
//                       <td className="px-6 py-4">₹{loan.amount}</td>
//                       <td className="px-6 py-4">{loan.loanTenure} months</td>
//                       <td
//                         className={`px-6 py-4 font-medium ${
//                           loan.status === 'approved'
//                             ? 'text-green-600'
//                             : loan.status === 'rejected'
//                             ? 'text-red-600'
//                             : 'text-yellow-600'
//                         }`}
//                       >
//                         {loan.status}
//                       </td>
//                       <td className="px-6 py-4 flex justify-center space-x-2">
//   {['verified', 'pending'].includes(loan.status.toLowerCase()) && (
//     <>
//       <button
//         onClick={() => handleAction(loan._id, 'approve')}
//         className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
//       >
//         Approve
//       </button>
//       <button
//         onClick={() => handleAction(loan._id, 'reject')}
//         className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
//       >
//         Reject
//       </button>
//     </>
//   )}
// </td>

//                     </tr>
//                   ))}
//                 {loans.filter((loan) => ['pending', 'verified'].includes(loan.status?.toLowerCase())).length === 0 && (
//                   <tr>
//                     <td colSpan="5" className="text-center py-6 text-gray-500">
//                       No pending or verified loan applications found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const StatCard = ({ title, value }) => (
//   <div className="bg-white rounded shadow p-4 text-center">
//     <h3 className="text-sm font-semibold text-gray-700 uppercase">{title}</h3>
//     <p className="text-2xl font-bold text-green-700 mt-2">{value}</p>
//   </div>
// );

// const statusColor = (status) => {
//   switch (status) {
//     case 'approved':
//       return 'bg-green-600';
//     case 'rejected':
//       return 'bg-red-600';
//     case 'pending':
//       return 'bg-yellow-500';
//     case 'verified':
//       return 'bg-blue-600';
//     default:
//       return 'bg-gray-400';
//   }
// };

// export default AdminDashboard;





// import { useEffect, useState } from 'react';

// function AdminDashboard() {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [actionLoading, setActionLoading] = useState(false);

//   const token = localStorage.getItem('accessToken');

//   const fetchLoans = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch('http://localhost:5000/api/loans/all', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Failed to fetch loans');
//       setLoans(data.loans);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAction = async (id, action) => {
//     setActionLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/api/loans/${action}/${id}`, {
//         method: 'PATCH',
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);
//       fetchLoans();
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (token) fetchLoans();
//     else setError('Authentication token not found. Please log in again.');
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-green-800 text-white p-6 space-y-6">
//         <div className="text-2xl font-bold">CREDIT APP</div>
//         <div className="font-medium text-lg">John Doe</div>
//         <nav className="space-y-4 text-sm mt-6">
//           {[
//             'Dashboard', 'Borrowers', 'Loans', 'Repayments', 'Loan Parameters',
//             'Accounting', 'Reports', 'Collateral', 'Access Configuration',
//             'Savings', 'Other Incomes', 'Payroll', 'Expenses',
//             'Investor Accounts', 'Calendar', 'Settings', 'Sign Out',
//           ].map((item) => (
//             <a key={item} href="#" className="block hover:text-green-300">
//               {item}
//             </a>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h2 className="text-gray-700 font-semibold text-lg">ADMIN - DASHBOARD</h2>
//           <div className="flex items-center space-x-4">
//             <button className="relative">
//               <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M15 17h5l-1.405-1.405M19.595 15.595A2.032 2.032 0 0121 13.5V11c0-3.037-1.538-5.735-4.08-7.333A9.985 9.985 0 0012 2a9.985 9.985 0 00-4.92 1.667C4.538 5.265 3 7.963 3 11v2.5c0 .637.253 1.246.705 1.695L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//             </button>
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-6 0h6m-6 0H5a2 2 0 01-2-2V10a2 2 0 012-2h2m6 0H9" />
//             </svg>
//             <div className="text-gray-700 font-medium">Admin ⌄</div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-8">
//           <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//             <StatCard title="ACTIVE USERS" value="200" />
//             <StatCard title="BORROWERS" value="100" />
//             <StatCard title="CASH DISBURSED" value="550,000" />
//             <StatCard title="CASH RECEIVED" value="1,000,000" />
//             <StatCard title="SAVINGS" value="450,000" />
//             <StatCard title="REPAID LOANS" value="30" />
//             <StatCard title="OTHER ACCOUNTS" value="10" />
//             <StatCard title="LOANS" value="50" />
//           </div>

//           {/* Loan Table */}
//           <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-8">
//             <h3 className="text-xl font-bold p-4 border-b text-green-800">Pending Loan Applications</h3>
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
//                 {loading ? (
//                   <tr>
//                     <td colSpan="5" className="text-center py-6 text-gray-500">Loading loans...</td>
//                   </tr>
//                 ) : (
//                   loans
//                     .filter((loan) => ['pending', 'verified'].includes(loan.status?.toLowerCase()))
//                     .map((loan) => (
//                       <tr key={loan._id} className="hover:bg-gray-50 transition">
//                         <td className="px-6 py-4">{loan.fullName || loan.user?.name || 'N/A'}</td>
//                         <td className="px-6 py-4">₹{loan.amount}</td>
//                         <td className="px-6 py-4">{loan.loanTenure} months</td>
//                         <td className={`px-6 py-4 font-medium ${statusColor(loan.status)}`}>
//                           {loan.status}
//                         </td>
//                         <td className="px-6 py-4 flex justify-center space-x-2">
//                           {['verified', 'pending'].includes(loan.status.toLowerCase()) && (
//                             <>
//                               <button
//                                 onClick={() => handleAction(loan._id, 'approve')}
//                                 disabled={actionLoading}
//                                 className={`bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded ${
//                                   actionLoading ? 'opacity-50 cursor-not-allowed' : ''
//                                 }`}
//                               >
//                                 Approve
//                               </button>
//                               <button
//                                 onClick={() => handleAction(loan._id, 'reject')}
//                                 disabled={actionLoading}
//                                 className={`bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded ${
//                                   actionLoading ? 'opacity-50 cursor-not-allowed' : ''
//                                 }`}
//                               >
//                                 Reject
//                               </button>
//                             </>
//                           )}
//                         </td>
//                       </tr>
//                     ))
//                 )}
//                 {!loading && loans.filter((loan) => ['pending', 'verified'].includes(loan.status?.toLowerCase())).length === 0 && (
//                   <tr>
//                     <td colSpan="5" className="text-center py-6 text-gray-500">
//                       No pending or verified loan applications found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const StatCard = ({ title, value }) => (
//   <div className="bg-white rounded shadow p-4 text-center">
//     <h3 className="text-sm font-semibold text-gray-700 uppercase">{title}</h3>
//     <p className="text-2xl font-bold text-green-700 mt-2">{value}</p>
//   </div>
// );

// const statusColor = (status) => {
//   switch (status?.toLowerCase()) {
//     case 'approved':
//       return 'text-green-600';
//     case 'rejected':
//       return 'text-red-600';
//     case 'pending':
//       return 'text-yellow-600';
//     case 'verified':
//       return 'text-blue-600';
//     default:
//       return 'text-gray-500';
//   }
// };

// export default AdminDashboard;

import { useEffect, useState } from 'react';

function AdminDashboard() {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const token = localStorage.getItem('accessToken');

  const fetchLoans = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/loans/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to fetch loans');
      setLoans(data.loans);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    setActionLoading(true);
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
    } finally {
      setActionLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchLoans();
    else setError('Authentication token not found. Please log in again.');
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white p-6 space-y-6">
        <div className="text-2xl font-bold">CREDIT APP</div>
        <div className="font-medium text-lg">John Doe</div>
        <nav className="space-y-4 text-sm mt-6">
          {[
            'Dashboard', 'Borrowers', 'Loans', 'Repayments', 'Loan Parameters',
            'Accounting', 'Reports', 'Collateral', 'Access Configuration',
            'Savings', 'Other Incomes', 'Payroll', 'Expenses',
            'Investor Accounts', 'Calendar', 'Settings', 'Sign Out',
          ].map((item) => (
            <a key={item} href="#" className="block hover:text-green-300">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-gray-700 font-semibold text-lg">ADMIN - DASHBOARD</h2>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.405-1.405M19.595 15.595A2.032 2.032 0 0121 13.5V11c0-3.037-1.538-5.735-4.08-7.333A9.985 9.985 0 0012 2a9.985 9.985 0 00-4.92 1.667C4.538 5.265 3 7.963 3 11v2.5c0 .637.253 1.246.705 1.695L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-6 0h6m-6 0H5a2 2 0 01-2-2V10a2 2 0 012-2h2m6 0H9" />
            </svg>
            <div className="text-gray-700 font-medium">Admin ⌄</div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <StatCard title="ACTIVE USERS" value="200" />
            <StatCard title="BORROWERS" value="100" />
            <StatCard title="CASH DISBURSED" value="550,000" />
            <StatCard title="CASH RECEIVED" value="1,000,000" />
            <StatCard title="SAVINGS" value="450,000" />
            <StatCard title="REPAID LOANS" value="30" />
            <StatCard title="OTHER ACCOUNTS" value="10" />
            <StatCard title="LOANS" value="50" />
          </div>

          {/* Loan Table */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-8">
            <h3 className="text-xl font-bold p-4 border-b text-green-800">Pending Loan Applications</h3>
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
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">Loading loans...</td>
                  </tr>
                ) : (
                  loans
                    .filter((loan) => ['pending', 'verified'].includes(loan.status?.toLowerCase()))
                    .map((loan) => (
                      <tr key={loan._id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">{loan.fullName || loan.user?.name || 'N/A'}</td>
                        <td className="px-6 py-4">₹{loan.amount}</td>
                        <td className="px-6 py-4">{loan.loanTenure} months</td>
                        <td className={`px-6 py-4 font-medium ${statusColor(loan.status)}`}>
                          {loan.status}
                        </td>
                        <td className="px-6 py-4 flex justify-center space-x-2">
                          {['verified', 'pending'].includes(loan.status.toLowerCase()) && (
                            <>
                              <button
                                onClick={() => handleAction(loan._id, 'approve')}
                                disabled={actionLoading}
                                className={`bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded ${
                                  actionLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleAction(loan._id, 'reject')}
                                disabled={actionLoading}
                                className={`bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded ${
                                  actionLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                              >
                                Reject
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))
                )}
                {!loading && loans.filter((loan) => ['pending', 'verified'].includes(loan.status?.toLowerCase())).length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">
                      No pending or verified loan applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded shadow p-4 text-center">
    <h3 className="text-sm font-semibold text-gray-700 uppercase">{title}</h3>
    <p className="text-2xl font-bold text-green-700 mt-2">{value}</p>
  </div>
);

const statusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'approved':
      return 'text-green-600';
    case 'rejected':
      return 'text-red-600';
    case 'pending':
      return 'text-yellow-600';
    case 'verified':
      return 'text-blue-600';
    default:
      return 'text-gray-500';
  }
};

export default AdminDashboard;
