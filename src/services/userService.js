import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async () => {
  return await User.find().select("-password");
};

export const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

export const updateUser = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return await User.findByIdAndUpdate(id, data, {
    new: true,
  }).select("-password");
};

export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export const changeUserRole = async (id, role) => {
  return await User.findByIdAndUpdate(
    id,
    { role },
    { new: true }
  ).select("-password");
};

export const changeUserStatus = async (id, status) => {
  return await User.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  ).select("-password");
};