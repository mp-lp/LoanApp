# 💼 CreditSea - Loan Management System

A full-stack Loan Management System with role-based dashboards for Admins, Verifiers, and Users. Built using:

- 🌐 **Backend**: Node.js + TypeScript + Express + MongoDB
- 🎨 **Frontend**: React.js + Tailwind CSS
- 🔐 **Auth**: JWT-based (access & refresh tokens)
- 🧑‍⚖️ **Roles**: Admin, Verifier, User

---

## 🚀 Features

### ✅ User
- Register / Login
- Apply for Loans
- View personal loan status

### 🛂 Verifier Dashboard
- View all loan applications
- Verify or reject pending applications

### 👑 Admin Dashboard
- View all loans
- Approve or reject loans
- Add or delete other admin users

---

## 🧾 API Endpoints

### Auth (JWT)
- `POST /api/auth/register`
- `POST /api/auth/login`

### Loan Routes
| Endpoint | Method | Roles | Description |
|----------|--------|--------|-------------|
| `/api/loans/apply` | POST | User | Apply for a loan |
| `/api/loans/my-loans` | GET | User | View user's loans |
| `/api/loans/all` | GET | Admin, Verifier | View all loans |
| `/api/loans/verify/:id` | PATCH | Verifier | Verify a loan |
| `/api/loans/reject/:id` | PATCH | Admin, Verifier | Reject a loan |
| `/api/loans/approve/:id` | PATCH | Admin, Verifier | Approve a loan |
| `/api/loans/admin/approve/:id` | PATCH | Admin | Force-approve a loan |
| `/api/loans/admin/reject/:id` | PATCH | Admin | Force-reject a loan |

### Admin Management
| Endpoint | Method | Roles | Description |
|----------|--------|--------|-------------|
| `/api/loans/admin/add` | POST | Admin | Add a new admin by email |
| `/api/loans/admin/delete/:id` | DELETE | Admin | Delete admin by ID |
| `/api/admins` | GET | Admin | (Optional) Get list of all admins |

---

## 🖥️ Frontend Pages

### `/admin-dashboard`
- Dashboard cards: total users, loans, approved/pending/rejected count
- Table of recent loans with status and actions
- Admin management section:
  - Add Admin (email input)
  - List & Delete Admins

### `/verifier-dashboard`
- Table of loans
- Buttons to verify or reject loans

---

 Authentication & Authorization
JWT access token is stored in localStorage.

Each API call includes Authorization: Bearer <token>.

Middleware:

authenticate checks token validity.

authorize(...roles) restricts route access.
