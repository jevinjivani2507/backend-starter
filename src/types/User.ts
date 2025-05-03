import { Document } from "mongoose";

export interface User extends Document {
  passportId: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  avatar?: string;
}
