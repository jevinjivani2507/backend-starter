import { Router } from "express";
import { getUserData } from "../controllers/user";

const router = Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get current user data
 *     tags: [User]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", getUserData);

export default router;
