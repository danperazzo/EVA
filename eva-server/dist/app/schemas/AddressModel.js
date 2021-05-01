"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSchema = exports.Address = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var AddressSchema = new mongoose_1.default.Schema({
    street: {
        type: String,
        required: true,
        maxLength: 200
    },
    number: {
        type: String,
        required: true,
        maxLength: 200
    },
    postalCode: {
        type: String,
        required: true,
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
exports.AddressSchema = AddressSchema;
var Address = mongoose_1.default.model('Address', AddressSchema);
exports.Address = Address;
var ObjectId = mongoose_1.default.Types.ObjectId;
