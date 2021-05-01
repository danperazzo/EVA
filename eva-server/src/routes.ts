import { Router } from 'express';

import InstitutionsController from './app/controllers/InstitutionsController';
import OccurencesController from  './app/controllers/OccurrencesController';
import AddressesController from './app/controllers/AddressesController';

const routes = Router();

//institutions routes 
routes.get('/institutions', InstitutionsController.index);
routes.post('/institutions', InstitutionsController.store);
routes.get('/institutions/:id', InstitutionsController.getById);
routes.post('/institutions/storeMocked', InstitutionsController.storeMockedData);
routes.get('/institutions_filter',InstitutionsController.filterInstitutionsOc );


//occurences routes 
routes.get('/occurences', OccurencesController.index);
routes.post('/occurences', OccurencesController.store);
routes.get('/occurences/:id', OccurencesController.getById);

//address routes
//create 5 addresses
routes.post('/addresses', AddressesController.store);
routes.get('/addresses', AddressesController.index);

export default routes;