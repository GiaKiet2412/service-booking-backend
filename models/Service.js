import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // minutes
  image: { type: String }, // URL ảnh dịch vụ
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
export default Service;
