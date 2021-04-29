"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var InstitutionsController_1 = __importDefault(require("./app/controllers/InstitutionsController"));
var routes = express_1.Router();
//institutions routes 
routes.get('/', InstitutionsController_1.default.index);
routes.post('/models', InstitutionsController_1.default.store);
routes.get('/:id', InstitutionsController_1.default.getByName);
exports.default = routes;
