import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);
router.route('/profile').get(protect, userController.getUserProfile);

export default router;
