import gatewayConnector from './gateway.connector';
import RouteCreator from '../../lib/routes/router-creator';

const Router = new RouteCreator(gatewayConnector);
const router = Router.addRoutes([
  Router.get('/:key', gatewayConnector.get.name),
  Router.post('/', gatewayConnector.set.name),
  Router.delete('/:key', gatewayConnector.delete.name),
]);

export default router;
