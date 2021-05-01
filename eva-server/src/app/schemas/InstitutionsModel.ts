import mongoose, { model } from 'mongoose';
import { number } from 'yup';

const InstitutionSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    adress_id: String,
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    }
  
  });

  const Institution = mongoose.model('Institution', InstitutionSchema);
  const ObjectId = mongoose.Types.ObjectId;
  
  

export {
  Institution, InstitutionSchema
}; 
