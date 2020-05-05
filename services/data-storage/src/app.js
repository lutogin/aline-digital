import MicroMQ from 'micromq';
import applyRoutes from './v1/data-storage.routes';
import { RABBITMQ_URL } from '../config';

const app = new MicroMQ({
  name: 'data-storage',
  rabbit: {
    url: RABBITMQ_URL,
  },
});

applyRoutes(app);

export default app;
