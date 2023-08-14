import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: { type: Boolean, required: true, default: false },
    passwordHash: {
      type: String,
      required: true,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
    avatarUrl: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
