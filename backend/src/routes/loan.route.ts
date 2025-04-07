// import express from 'express';
// import { applyForLoan,getAllLoans , getLoansByUser ,verifyLoan,rejectLoan,
//     approveLoan, addAdmin, deleteAdmin
// } from '../controller/user.controller';
// import { authenticate ,authorize} from '../middleware/auth.middleware';
// import { Roles } from '../models/user.model'; // ✅ Add this line

// const router = express.Router();

// router.post('/apply', authenticate, applyForLoan);

// // 🧾 All loans - for Admin & Verifier
// router.get('/all', authenticate, authorize(Roles.ADMIN, Roles.VERIFIER), getAllLoans);

// // 👤 Loans by current user
// router.get('/my-loans', authenticate, getLoansByUser);

// // Only Verifiers can access these routes
// router.patch('/verify/:id', authenticate, authorize(Roles.VERIFIER), verifyLoan);
// router.patch('/reject/:id', authenticate, authorize(Roles.ADMIN,Roles.VERIFIER,), rejectLoan);
// router.patch('/approve/:id', authenticate, authorize(Roles.ADMIN,Roles.VERIFIER), approveLoan);


// // Admin-only routes
// router.patch('/admin/approve/:id', authenticate, authorize(Roles.ADMIN), approveLoan);
// router.patch('/admin/reject/:id', authenticate, authorize(Roles.ADMIN), rejectLoan);
// router.post('/admin/add', authenticate, authorize(Roles.ADMIN), addAdmin);
// router.delete('/admin/delete/:id', authenticate, authorize(Roles.ADMIN), deleteAdmin);
// export default router;


import express from 'express';
import {
  applyForLoan,
  getAllLoans,
  getLoansByUser,
  verifyLoan,
  rejectLoan,
  approveLoan,
  addAdmin,
  deleteAdmin
} from '../controller/user.controller';

import { authenticate, authorize } from '../middleware/auth.middleware';
import { Roles } from '../models/user.model';

const router = express.Router();

// 👤 Loan Application Routes
router.post('/apply', authenticate, applyForLoan);
router.get('/my-loans', authenticate, getLoansByUser);

// 🧾 Loan Management (Admin + Verifier)
router.get('/all', authenticate, authorize(Roles.ADMIN, Roles.VERIFIER), getAllLoans);

// ✅ Verifier-Only Actions
router.patch('/verify/:id', authenticate, authorize(Roles.VERIFIER), verifyLoan);

// ❌ Rejection & Approval (Admin + Verifier)
router.patch('/reject/:id', authenticate, authorize(Roles.ADMIN, Roles.VERIFIER), rejectLoan);
router.patch('/approve/:id', authenticate, authorize(Roles.ADMIN, Roles.VERIFIER), approveLoan);

// 🔐 Admin-Only Routes
router.patch('/admin/approve/:id', authenticate, authorize(Roles.ADMIN), approveLoan);
router.patch('/admin/reject/:id', authenticate, authorize(Roles.ADMIN), rejectLoan);
router.post('/admin/add', authenticate, authorize(Roles.ADMIN), addAdmin);
router.delete('/admin/delete/:id', authenticate, authorize(Roles.ADMIN), deleteAdmin);

export default router;
