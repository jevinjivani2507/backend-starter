import mongoose, { Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - _id
 *         - title
 *         - userId
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB generated ID
 *         title:
 *           type: string
 *           description: Title of the todo item
 *         description:
 *           type: string
 *           description: Detailed description of the todo item
 *         completed:
 *           type: boolean
 *           description: Completion status of the todo
 *           default: false
 *         userId:
 *           type: string
 *           description: Reference to the user who owns this todo
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 */
export interface Todo extends Document {
  title: string;
  description?: string;
  completed: boolean;
  userId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
