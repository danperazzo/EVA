import { Router } from 'express';

import ModelController from './app/controllers/ModelController';

const routes = Router();

routes.get('/', ModelController.index);
routes.post('/model', ModelController.store);

export default routes;