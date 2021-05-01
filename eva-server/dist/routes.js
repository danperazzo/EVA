"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var InstitutionsController_1 = __importDefault(require("./app/controllers/InstitutionsController"));
var OccurencesController_1 = __importDefault(require("./app/controllers/OccurencesController"));
var AddressesController_1 = __importDefault(require("./app/controllers/AddressesController"));
var routes = express_1.Router();
//institutions routes 
routes.get('/institutions', InstitutionsController_1.default.index);
routes.post('/institutions', InstitutionsController_1.default.store);
routes.get('/institutions/:id', InstitutionsController_1.default.getById);
//occurences routes 
routes.get('/occurences', OccurencesController_1.default.index);
routes.post('/occurences', OccurencesController_1.default.store);
routes.get('/occurences/:id', OccurencesController_1.default.getById);
//address routes
//create 5 addresses
routes.post('/addresses', AddressesController_1.default.store);
routes.get('/addresses', AddressesController_1.default.index);
exports.default = routes;
