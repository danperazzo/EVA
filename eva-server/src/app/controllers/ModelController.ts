import * as Yup from 'yup';
import { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import Model from '../schemas/Model';

class ModelController {
  async index(req: Request, res: Response) {
    return res.send({ msg: 'Hello world' });
  }

  async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      content: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    try {
      const newModel = Model.create(req.body);
      return res.send(newModel);
    } catch (err) {
      Sentry.captureException(err);
      return res.send(err);
    }
  }
}

export default new ModelController();
