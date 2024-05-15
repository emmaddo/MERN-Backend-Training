import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserDocument>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<UserDocument>('User', userSchema);
