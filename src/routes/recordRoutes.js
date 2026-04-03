import express from "express";
import { create, getAll, update, remove } from "../controllers/recordController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, authorizeRoles("analyst", "admin"), getAll);
router.put("/:id", protect, authorizeRoles("admin"), update);
router.delete("/:id", protect, authorizeRoles("admin"), remove);

export default router;