"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Database = /** @class */ (function () {
    function Database() {
        this.uri = process.env.MONGO_URL || "mongodb://localhost:27017";
        mongoose_1.default.connect(this.uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
        });
    }
    return Database;
}());
exports.default = new Database();
