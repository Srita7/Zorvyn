import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateRole,
  updateStatus,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

//  Only Admin can manage users

// Get all users
router.get("/", protect, authorizeRoles("admin"), getUsers);

// Get single user
router.get("/:id", protect, authorizeRoles("admin"), getUser);

// Update user
router.put("/:id", protect, authorizeRoles("admin"), updateUser);

// Delete user
router.delete("/:id", protect, authorizeRoles("admin"), deleteUser);

// Change role
router.patch(
  "/:id/role",
  protect,
  authorizeRoles("admin"),
  updateRole
);

// Change status
router.patch(
  "/:id/status",
  protect,
  authorizeRoles("admin"),
  updateStatus
);

export default router;