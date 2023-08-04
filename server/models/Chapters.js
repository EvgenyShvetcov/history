import mongoose from "mongoose";

const ChaptersSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    discription: String,
    pictureUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Chapters", ChaptersSchema);
