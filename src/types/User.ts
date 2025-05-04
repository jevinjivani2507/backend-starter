import { Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - _id
 *         - passportId
 *         - firstName
 *         - lastName
 *         - displayName
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB generated ID
 *         passportId:
 *           type: string
 *           description: OAuth provider ID
 *         firstName:
 *           type: string
 *           description: User's first name
 *         lastName:
 *           type: string
 *           description: User's last name
 *         displayName:
 *           type: string
 *           description: User's full name to display
 *         email:
 *           type: string
 *           description: User's email address
 *         avatar:
 *           type: string
 *           description: URL to user's profile picture
 */
export interface User extends Document {
  passportId: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  avatar?: string;
}
