
import { Express } from "express-serve-static-core";

import 'dotenv/config';
import express from 'express';
import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import cors from 'cors';
const Youch = require('youch');
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import routes from './routes';
import './database';
import sentryConfig from './config/sentry';

class App {
  server: Express;
  constructor() {
    this.server = express();
    Sentry.init(sentryConfig);
    this.server.use(Sentry.Handlers.requestHandler());
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err: ErrorRequestHandler, req: Request, res: Response, next:NextFunction) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal Server Error' });
    });
  }
}

export default new App().server;
