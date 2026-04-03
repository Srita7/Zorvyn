import * as userService from "../services/userService.js";

// Get all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// Get single user
export const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Update user
export const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(
      req.params.id,
      req.body
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Delete user
export const deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteUser(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};

// Change role
export const updateRole = async (req, res, next) => {
  try {
    const { role } = req.body;

    const user = await userService.changeUserRole(
      req.params.id,
      role
    );

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Change status
export const updateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const user = await userService.changeUserStatus(
      req.params.id,
      status
    );

    res.json(user);
  } catch (err) {
    next(err);
  }
};