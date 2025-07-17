import Service from '../models/Service.js';

// Create Service (Admin)
export const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Tạo dịch vụ thất bại' });
  }
};

// Get all services (User & Admin)
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách dịch vụ' });
  }
};

// Get single service
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Không tìm thấy dịch vụ' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy dịch vụ' });
  }
};

// Update service
export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật dịch vụ' });
  }
};

// Delete service
export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dịch vụ đã được xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa dịch vụ' });
  }
};
