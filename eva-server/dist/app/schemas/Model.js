"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionSchema = exports.Institution = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var InstitutionSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
exports.InstitutionSchema = InstitutionSchema;
//InstitutionSchema.plugin(beautifyUnique);
//InstitutionSchema.plugin(mongooseAggregatePaginate);
var Institution = mongoose_1.default.model('Institution', InstitutionSchema);
exports.Institution = Institution;
var ObjectId = mongoose_1.default.Types.ObjectId;
