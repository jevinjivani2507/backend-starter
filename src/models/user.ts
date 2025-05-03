import mongoose, { Schema } from "mongoose";
import { User } from "../types/User";

const UserSchema: Schema = new Schema<User>({
  passportId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
