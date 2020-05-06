import Gateway from 'micromq/gateway';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import routes from '../api/routes';
import errorCatcher from './error-catcher';
import { RABBITMQ_URL } from '../../config';

const gateway = new Gateway({
  microservices: ['data-storage'],
  rabbit: {
    url: RABBITMQ_URL,
  },
});

export function applyMiddleware(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(compression());
  app.use(gateway.middleware());
}

export function applyRoutes(app) {
  app.use('/', routes);
}

export function applyErrorCatcher(app) {
  app.use(errorCatcher);
}
