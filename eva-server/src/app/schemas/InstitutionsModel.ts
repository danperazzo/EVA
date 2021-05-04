import mongoose, { model } from "mongoose";

const InstitutionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    number: String,
    city: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Institution = mongoose.model("Institution", InstitutionSchema);

export { Institution, InstitutionSchema };
