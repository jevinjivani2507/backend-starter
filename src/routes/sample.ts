import { Router } from "express";
import { sayHello } from "@/controllers/sample";

const router = Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a hello message
 *     tags: [Sample]
 *     responses:
 *       200:
 *         description: Hello message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Hello World"
 */
router.get("/hello", sayHello);

export default router;
