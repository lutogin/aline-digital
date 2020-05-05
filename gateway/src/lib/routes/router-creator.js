import express from 'express';
import dispatcher from './dispatcher';

/**
 * Express router wrapper that can wrap each endpoint in a try/catch and
 * adds an appropriate validator for each router.
 */
class RouterCreator {
  constructor(controllerInstance) {
    this.controller = controllerInstance;
    this.router = express.Router();
    this.get = (path, controllerMethodName) => ({ method: 'get', path, controllerMethodName });
    this.post = (path, controllerMethodName) => ({ method: 'post', path, controllerMethodName });
    this.put = (path, controllerMethodName) => ({ method: 'put', path, controllerMethodName });
    this.patch = (path, controllerMethodName) => ({ method: 'patch', path, controllerMethodName });
    this.delete = (path, controllerMethodName) => ({ method: 'delete', path, controllerMethodName });
  }

  addRoutes(routes) {
    routes.forEach(async (route) => {
      const { method, path, controllerMethodName } = route;
      this.router[method](path, dispatcher(this.controller, controllerMethodName));
    });

    return this.router;
  }
}

export default RouterCreator;
