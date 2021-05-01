"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccurenceSchema = exports.Occurence = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var OccurenceSchema = new mongoose_1.default.Schema({
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
exports.OccurenceSchema = OccurenceSchema;
var Occurence = mongoose_1.default.model('Occurence', OccurenceSchema);
exports.Occurence = Occurence;
var ObjectId = mongoose_1.default.Types.ObjectId;
