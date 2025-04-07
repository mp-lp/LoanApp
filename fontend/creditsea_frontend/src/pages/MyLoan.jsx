

// import { useEffect, useState } from 'react';

// function MyLoans() {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchLoans = async () => {
//       try {
//         const token = localStorage.getItem('accessToken');
  
//         const res = await fetch('http://localhost:5000/api/loans/my-loans', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });
  
//         const data = await res.json();
//         console.log("API response:", data); // should log { loans: [...] }
  
//         if (!res.ok) throw new Error(data.message || 'Failed to fetch loans');
  
//         setLoans(data.loans); // ✅ fix is here
  
//       } catch (err) {
//         console.error("Error fetching loans:", err);
//         setError(err.message);
//       }
//     };
  
//     fetchLoans();
//   }, []);
  
//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">My Loan Applications</h1>

//       {error && <p className="text-red-500">{error}</p>}

//       {loans.length === 0 ? (
//         <p>No loans found.</p>
//       ) : (
//         <div className="space-y-4">
//           {loans.map((loan) => (
//             <div key={loan._id} className="border p-4 rounded shadow">
//               <p><strong>Amount:</strong> ₹{loan.amount}</p>
//               <p><strong>Status:</strong> {loan.status}</p>
//               <p><strong>Date:</strong> {new Date(loan.createdAt).toLocaleDateString()}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyLoans;










// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaBell,
//   FaUserCircle,
//   FaChevronDown,
//   FaSearch,
//   FaEllipsisV,
// } from "react-icons/fa";

// function MyLoans() {
//   const [loans, setLoans] = useState([]);
//   const [error, setError] = useState("");
//   let navigate;
//   try {
//     navigate = useNavigate();
//   } catch {
//     console.warn("useNavigate used outside <Router>. Make sure to render this inside a Router.");
//   }

//   useEffect(() => {
//     const fetchLoans = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");

//         const res = await fetch("http://localhost:5000/api/loans/my-loans", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();
//         if (!res.ok) throw new Error(data.message || "Failed to fetch loans");

//         setLoans(data.loans);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchLoans();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case "pending":
//         return "bg-yellow-400 text-white";
//       case "verified":
//         return "bg-green-500 text-white";
//       case "rejected":
//         return "bg-red-500 text-white";
//       case "approved":
//         return "bg-blue-600 text-white";
//       default:
//         return "bg-gray-300 text-gray-800";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       {/* Header */}
//       <div className="bg-white shadow flex justify-between items-center px-6 py-4">
//         <div className="text-gray-600 uppercase text-sm">USER - Dashboard - Loans</div>
//         <div className="flex gap-4 items-center">
//           <FaBell className="text-xl text-green-800" />
//           <FaUserCircle className="text-xl text-green-800" />
//           <span className="font-semibold text-green-800">User</span>
//           <FaChevronDown className="text-green-800" />
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white flex justify-between items-center px-6 py-4 border-b">
//         <h1 className="text-xl font-bold text-green-900">CREDIT APP</h1>
//         <div className="flex gap-8 text-sm text-green-900">
//           <span className="cursor-pointer">Home</span>
//           <span className="cursor-pointer">Payments</span>
//           <span className="cursor-pointer">Budget</span>
//           <span className="cursor-pointer">Card</span>
//         </div>
//       </div>

//       {/* Deficit + Tabs */}
//       <div className="bg-gray-50 p-6 flex flex-col items-center gap-4">
//         <div className="flex items-center gap-2">
//           <div className="bg-green-200 p-2 rounded">
//             <span className="text-green-800 font-bold text-lg">₦ 0.0</span>
//           </div>
//           <div className="uppercase text-sm text-gray-500">Deficit</div>
//         </div>
//         <button
//           className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded shadow"
//           onClick={() => navigate && navigate("/apply-loan")}
//         >
//           Get A Loan
//         </button>

//         <div className="bg-white shadow rounded flex overflow-hidden mt-4">
//           <button className="px-4 py-2 bg-green-50 font-semibold">Borrow Cash</button>
//           <button className="px-4 py-2">Transact</button>
//           <button className="px-4 py-2">Deposit Cash</button>
//         </div>

//         <div className="relative mt-4 w-full max-w-md">
//           <FaSearch className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search for loans"
//             className="pl-10 pr-4 py-2 border rounded w-full"
//           />
//         </div>
//       </div>

//       {/* Loans Table */}
//       <div className="max-w-5xl mx-auto bg-white rounded shadow mt-8">
//         <div className="flex justify-between items-center px-6 py-4 border-b">
//           <h2 className="font-bold text-lg">Applied Loans</h2>
//           <div className="flex gap-4 text-sm text-gray-500">
//             <span className="cursor-pointer">Sort</span>
//             <span className="cursor-pointer">Filter</span>
//           </div>
//         </div>

//         {error && <p className="text-red-500 px-6 py-4">{error}</p>}

//         <div className="divide-y">
//           {loans.length === 0 ? (
//             <p className="text-center text-gray-500 py-8">No loans found.</p>
//           ) : (
//             loans.map((loan) => (
//               <div
//                 key={loan._id}
//                 className="flex justify-between items-center px-6 py-4 hover:bg-gray-50"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src="https://i.pravatar.cc/40"
//                     alt="Loan Officer"
//                     className="rounded-full w-10 h-10"
//                   />
//                   <div>
//                     <p className="font-semibold">John Okoh</p>
//                     <p className="text-xs text-gray-500">Updated 1 day ago</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-semibold">₦{loan.amount.toLocaleString()}</p>
//                   <p className="text-xs text-gray-500">
//                     {loan.status.toLowerCase() === "approved" ? "Loan Fully Repaid" : "Not Debt Yet"}
//                   </p>
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   <p>{new Date(loan.createdAt).toLocaleDateString()}</p>
//                   <p className="text-xs">6:30 PM</p>
//                 </div>
//                 <span
//                   className={`text-xs px-3 py-1 rounded-full font-semibold ${getStatusColor(
//                     loan.status
//                   )}`}
//                 >
//                   {loan.status.toUpperCase()}
//                 </span>
//                 <FaEllipsisV className="text-gray-400" />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyLoans;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaSearch,
  FaEllipsisV,
} from "react-icons/fa";

function MyLoans() {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState("");
  let navigate;
  try {
    navigate = useNavigate();
  } catch {
    console.warn("useNavigate used outside <Router>. Make sure to render this inside a Router.");
  }

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await fetch("http://localhost:5000/api/loans/my-loans", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch loans");

        setLoans(data.loans);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLoans();
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-400 text-white";
      case "verified":
        return "bg-green-500 text-white";
      case "rejected":
        return "bg-red-500 text-white";
      case "approved":
        return "bg-blue-600 text-white";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <div className="bg-white shadow flex justify-between items-center px-6 py-4">
        <div className="text-gray-600 uppercase text-sm">USER - Dashboard - Loans</div>
        <div className="flex gap-4 items-center">
          <FaBell className="text-xl text-green-800" />
          <FaUserCircle className="text-xl text-green-800" />
          <span className="font-semibold text-green-800">User</span>
          <FaChevronDown className="text-green-800" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-xl font-bold text-green-900">CREDIT APP</h1>
        <div className="flex gap-8 text-sm text-green-900">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Payments</span>
          <span className="cursor-pointer">Budget</span>
          <span className="cursor-pointer">Card</span>
        </div>
      </div>

      {/* Deficit + Tabs */}
      <div className="bg-gray-50 p-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-green-200 p-2 rounded">
            <span className="text-green-800 font-bold text-lg">₦ 0.0</span>
          </div>
          <div className="uppercase text-sm text-gray-500">Deficit</div>
        </div>
        <button
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded shadow"
          onClick={() => navigate && navigate("/apply-loan")}
        >
          Get A Loan
        </button>

        <div className="bg-white shadow rounded flex overflow-hidden mt-4">
          <button className="px-4 py-2 bg-green-50 font-semibold">Borrow Cash</button>
          <button className="px-4 py-2">Transact</button>
          <button className="px-4 py-2">Deposit Cash</button>
        </div>

        <div className="relative mt-4 w-full max-w-md">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for loans"
            className="pl-10 pr-4 py-2 border rounded w-full"
          />
        </div>
      </div>

      {/* Loans Table */}
       {/* Loans Table (Dynamic) */}
       <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Loan Applications</h1>

        {error && <p className="text-red-500">{error}</p>}

        {loans.length === 0 ? (
          <p>No loans found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left border">Amount</th>
                  <th className="px-4 py-2 text-left border">Status</th>
                  <th className="px-4 py-2 text-left border">Date</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan._id} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-2 border">₦{loan.amount}</td>
                    <td className="px-4 py-2 border">{loan.status}</td>
                    <td className="px-4 py-2 border">{new Date(loan.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyLoans;
