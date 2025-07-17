import express from 'express';
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from '../controllers/serviceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', protect, createService); // sẽ bổ sung kiểm tra admin sau
router.put('/:id', protect, updateService);
router.delete('/:id', protect, deleteService);

export default router;
