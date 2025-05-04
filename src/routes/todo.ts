import { Router } from "express";
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "@/controllers/todo";

const router = Router();

/**
 * @swagger
 * /todo:
 *   get:
 *     summary: Get all todos for the current user
 *     tags: [Todo]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllTodos);

/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: Get a todo by ID
 *     tags: [Todo]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the todo
 *     responses:
 *       200:
 *         description: Todo details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getTodoById);

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todo]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the todo
 *               description:
 *                 type: string
 *                 description: Detailed description of the todo
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/", createTodo);

/**
 * @swagger
 * /todo/{id}:
 *   put:
 *     summary: Update a todo
 *     tags: [Todo]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", updateTodo);

/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todo]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the todo
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteTodo);

export default router;
