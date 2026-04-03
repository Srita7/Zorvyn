import express from "express";
import {
  summary,
  categoryTotals,
  trends,
  recent,
} from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/summary", protect, authorizeRoles("analyst", "admin"), summary);
router.get("/category", protect, authorizeRoles("analyst", "admin"), categoryTotals);
router.get("/trends", protect, authorizeRoles("analyst", "admin"), trends);
router.get("/recent", protect, authorizeRoles("analyst", "admin"), recent);

export default router;