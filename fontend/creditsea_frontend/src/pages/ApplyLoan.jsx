import { useState } from 'react';

function ApplyLoan() {
  const [form, setForm] = useState({
    fullName: '',
    amount: '',
    tenure: '',
    employmentStatus: '',
    reason: '',
    employmentAddress: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('accessToken');
  
      const payload = {
        ...form,
        amount: Number(form.amount),
        loanTenure: Number(form.tenure), // ✅ map tenure → loanTenure
      };
      delete payload.tenure; // ✅ remove original field
  
      const res = await fetch('http://localhost:5000/api/loans/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Loan application failed');
  
      alert('Loan application submitted successfully!');
      setForm({
        fullName: '',
        amount: '',
        tenure: '',
        employmentStatus: '',
        reason: '',
        employmentAddress: '',
      });
    } catch (err) {
      alert(err.message);
    }
  };
  

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">APPLY FOR A LOAN</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">Full name as it appears on bank account</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full name as it appears on bank account"
            className="w-full border rounded p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">How much do you need?</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="How much do you need?"
            className="w-full border rounded p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan tenure (in months)</label>
          <input
            type="number"
            name="tenure"
            value={form.tenure}
            onChange={handleChange}
            placeholder="Loan tenure (in months)"
            className="w-full border rounded p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Employment status</label>
          <input
            type="text"
            name="employmentStatus"
            value={form.employmentStatus}
            onChange={handleChange}
            placeholder="Employment status"
            className="w-full border rounded p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="md:col-span-1">
          <label className="block mb-1 font-medium">Reason for loan</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            placeholder="Reason for loan"
            rows={4}
            className="w-full border rounded p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        <div className="md:col-span-1">
          <label className="block mb-1 font-medium">Employment address</label>
          <textarea
            name="employmentAddress"
            value={form.employmentAddress}
            onChange={handleChange}
            placeholder="Employment address"
            rows={4}
            className="w-full border rounded p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyLoan;
