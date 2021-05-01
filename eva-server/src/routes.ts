import { Router } from 'express';

import InstitutionsController from './app/controllers/InstitutionsController';
import OccurrencesController from  './app/controllers/OccurrencesController';
import AddressesController from './app/controllers/AddressesController';

const routes = Router();

//institutions routes 
routes.get('/institutions', InstitutionsController.index);
routes.post('/institutions', InstitutionsController.store);
routes.get('/institutions/:id', InstitutionsController.findOne);
routes.get('/institutions/findbytype/:type', InstitutionsController.findByType);
routes.post('/institutions/storeMocked', InstitutionsController.storeMockedData)
// routes.get('/institutions/find/:id', InstitutionsController.findOne);

//occurrences routes 
routes.post('/occurrencesMocks', OccurrencesController.store);
routes.get('/occurrences', OccurrencesController.index);
routes.get('/occurencesByUrgencyLevel/', OccurrencesController.getByUrgencyLevel);
// routes.get('/occurrences/:id', OccurrencesController.getById);

//address routes
//create 5 addresses
routes.post('/addresses', AddressesController.store);
routes.get('/addresses', AddressesController.index);

export default routes;