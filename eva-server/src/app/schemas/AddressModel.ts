import mongoose, { model } from 'mongoose';

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
        maxLength: 200
    },
    number: {
        type: String,
        required: false,
        maxLength: 200
    },
    postalCode: {
        type: String,
        required: false,
        maxLength: 200
    },
    city: {
        type: String,
        required: true,
        maxLength: 200
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    }
  
  });

  const Address = mongoose.model('Address', AddressSchema);
  const ObjectId = mongoose.Types.ObjectId;
  
  

export {
  Address, AddressSchema
}; 
