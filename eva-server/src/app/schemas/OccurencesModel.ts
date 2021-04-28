import mongoose, { model } from 'mongoose';
import {Address} from './AddressModel';

const OccurenceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    needsMedicalAssistance: {
      type: Boolean,
      required: false,
      default: false
    },
    needsSecurityAssistance: {
      type: Boolean,
      required: false,
      default: false
    },
    needsPsychologicalAssistance: {
      type: Boolean,
      required: false,
      default: false
    },
    urgencyLevel: {
        type: Boolean,
        required: true,
        default: false
      },
    location: {
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

  const Occurence = mongoose.model('Occurence', OccurenceSchema);
  const ObjectId = mongoose.Types.ObjectId;
  
  

export {
  Occurence, OccurenceSchema
}; 
