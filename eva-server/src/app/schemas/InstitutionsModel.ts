import mongoose, { model } from 'mongoose';

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
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true
    },
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
