import mongoose, { model } from 'mongoose';

const ModelSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Model", ModelSchema)
