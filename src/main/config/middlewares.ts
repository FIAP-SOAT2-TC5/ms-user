import { bodyParser } from '../middlewares/body-parser';
import { contentType } from '../middlewares/content-type';
import { cors } from '../middlewares/cors';
import { Express } from 'express';

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};
