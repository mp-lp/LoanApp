import { Request, Response } from 'express';
import { Loan } from '../models/loan.model';

// export const applyForLoan = async (req: any, res: Response): Promise<void>=> {
//   try {
//     console.log("apply");
//     const {
//       fullName,
//       amount,
//       loanTenure,
//       employmentStatus,
//       employmentAddress,
//       reason
//     } = req.body;

//     const newLoan = new Loan({
//       fullName,
//       amount,
//       loanTenure,
//       employmentStatus,
//       employmentAddress,
//       reason,
//       user: req.user.id,
//       status: 'Pending'
//     });

//     await newLoan.save();
//    res.status(201).json({ message: 'Loan application submitted', loan: newLoan });

//   } catch (error) {
//     res.status(500).json({ message: 'Error applying for loan', error });
//   }
// };

export const getAllLoans = async (req: Request, res: Response) => {
  try {
    const loans = await Loan.find().populate('user', 'name email role');
    res.status(200).json({ loans });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch loans', error: err });
  }
};

export const applyForLoan = async (req: any, res: Response): Promise<void> => {
  try {
    const {
      fullName,
      amount,
      loanTenure,
      employmentStatus,
      employmentAddress,
      reason,
    } = req.body;

    const newLoan = new Loan({
      fullName,
      amount,
      loanTenure,
      employmentStatus,
      employmentAddress,
      reason,
      user: req.user.id,
      status: 'Pending',
    });

    await newLoan.save();
    res.status(201).json({ message: 'Loan application submitted', loan: newLoan });
  } catch (error) {
    console.error('Loan application error:', error);
    res.status(500).json({ message: 'Error applying for loan', error });
  }
};


export const getLoansByUser = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const loans = await Loan.find({ user: userId }).sort({ appliedAt: -1 });
    res.status(200).json({ loans });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user loans', error: err });
  }
};





// import { Loan } from '../models/loan.model'; // Adjust the path if needed

// PATCH /api/loans/verify/:id
export const verifyLoan = async (req: Request, res: Response): Promise<void> => {
  try {
    const loanId = req.params.id;

    const loan = await Loan.findById(loanId);
    if (!loan) {
      res.status(404).json({ message: 'Loan not found' });
      return;
    }

    if (loan.status !== 'Pending') {
      res.status(400).json({ message: 'Only pending loans can be verified' });
      return;
    }

    loan.status = 'Verified';
    await loan.save();

    res.status(200).json({ message: 'Loan verified successfully', loan });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying loan', error });
  }
};

// PATCH /api/loans/reject/:id
export const rejectLoan = async (req: Request, res: Response): Promise<void> => {
  try {
    const loanId = req.params.id;

    const loan = await Loan.findById(loanId);
    if (!loan) {
      res.status(404).json({ message: 'Loan not found' });
      return;
    }

   if (loan.status !== 'Pending') {
      res.status(400).json({ message: 'Only pending loans can be rejected' });
      return;
    }
    
    loan.status = 'Rejected';
    await loan.save();

    res.status(200).json({ message: 'Loan rejected successfully', loan });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting loan', error });
  }
};






//Admin controller 
import  User from '../models/user.model'; // assuming you have a User model
import mongoose from 'mongoose';

// Approve loan
export const approveLoan = async (req: Request, res: Response): Promise<void> => {
  try {
    const loan = await Loan.findById(req.params.id);
    
    if (!loan) return void res.status(404).json({ message: 'Loan not found' });

    loan.status = 'Approved';
    await loan.save();

    res.status(200).json({ message: 'Loan approved successfully', loan });
  } catch (error) {
    res.status(500).json({ message: 'Error approving loan', error });
  }
};

// Reject loan
// export const rejectLoan = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const loan = await Loan.findById(req.params.id);
//     if (!loan) return void res.status(404).json({ message: 'Loan not found' });

//     loan.status = 'Rejected';
//     await loan.save();

//     res.status(200).json({ message: 'Loan rejected successfully', loan });
//   } catch (error) {
//     res.status(500).json({ message: 'Error rejecting loan', error });
//   }
// };

// Add new admin
export const addAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return void res.status(404).json({ message: 'User not found' });

    //user.role = 'Admin';
    await user.save();

    res.status(200).json({ message: 'Admin added successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error adding admin', error });
  }
};

// Delete admin
export const deleteAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user || user.role !== 'Admin') {
      return void res.status(404).json({ message: 'Admin not found' });
    }

    // Change role back to user
    //user.role = 'user';
    await user.save();

    res.status(200).json({ message: 'Admin deleted successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin', error });
  }
};