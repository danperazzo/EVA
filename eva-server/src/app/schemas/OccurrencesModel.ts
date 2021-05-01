import mongoose, { model } from 'mongoose';
import {Address} from './AddressModel';

const OccurrenceSchema = new mongoose.Schema({
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
        type: Number,
        required: true,
        default: false
      },
    city: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    }
  
  });

  const Occurrence = mongoose.model('Occurrence', OccurrenceSchema);
  const ObjectId = mongoose.Types.ObjectId;
  
  

export {
  Occurrence, OccurrenceSchema
}; 
