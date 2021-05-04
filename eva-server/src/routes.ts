import { Router } from 'express';

import InstitutionsController from './app/controllers/InstitutionsController';
import OccurrencesController from  './app/controllers/OccurrencesController';
import AddressesController from './app/controllers/AddressesController';

const routes = Router();

//institutions routes 
routes.get('/institutions', InstitutionsController.index);
routes.post('/institutions', InstitutionsController.store);
routes.get('/institutions/:id', InstitutionsController.findOne);

// TODO: remove this route on refactor!!
// routes.get('/institutions/findbytype/:type', InstitutionsController.findByType);

routes.post('/institutions/storeMocked', InstitutionsController.storeMockedData);
routes.post('/occurrence/postOccurrence',OccurrencesController.postOccurrence );
routes.get('/institutions_name/findbyname', InstitutionsController.filterByName);
routes.get('/institutions_name/findbyname/findbycity', InstitutionsController.filterByNameByCity);

//occurrences routes 
routes.post('/occurrences/storeMocks', OccurrencesController.storeMocks);
routes.post('/occurrences', OccurrencesController.store);
routes.delete('/occurrences', OccurrencesController.dropTable);
routes.get('/occurrences', OccurrencesController.index);
routes.get('/occurrences/countByUrgencyInDateRange', OccurrencesController.countByUrgencyInDateRange);
routes.get('/occurrences/filterByDateRange', OccurrencesController.filterByDateRange);
routes.get('/occurrences/countByTypeInYear', OccurrencesController.countByTypeInYear);

//address routes
//create 5 addresses
routes.post('/addresses', AddressesController.store);
routes.get('/addresses', AddressesController.index);

export default routes;