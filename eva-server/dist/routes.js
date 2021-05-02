"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var InstitutionsController_1 = __importDefault(require("./app/controllers/InstitutionsController"));
var OccurrencesController_1 = __importDefault(require("./app/controllers/OccurrencesController"));
var AddressesController_1 = __importDefault(require("./app/controllers/AddressesController"));
var routes = express_1.Router();
//institutions routes 
routes.get('/institutions', InstitutionsController_1.default.index);
routes.post('/institutions', InstitutionsController_1.default.store);
routes.get('/institutions/:id', InstitutionsController_1.default.findOne);
routes.get('/institutions/findbytype/:type', InstitutionsController_1.default.findByType);
routes.post('/institutions/storeMocked', InstitutionsController_1.default.storeMockedData);
routes.post('/institutions_filter', InstitutionsController_1.default.filterInstitutionsOc);
//occurrences routes 
routes.post('/occurrences/storeMocks', OccurrencesController_1.default.storeMocks);
routes.get('/occurrences', OccurrencesController_1.default.index);
routes.get('/occurrences/countByUrgencyInDate', OccurrencesController_1.default.countByUrgencyInDate);
routes.get('/occurrences/filterByDateRange', OccurrencesController_1.default.filterByDateRange);
routes.get('/occurrences/countByTypeInYear', OccurrencesController_1.default.countByTypeInYear);
//address routes
//create 5 addresses
routes.post('/addresses', AddressesController_1.default.store);
routes.get('/addresses', AddressesController_1.default.index);
exports.default = routes;
