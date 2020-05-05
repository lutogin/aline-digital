import express from 'express';
import { applyMiddleware, applyRoutes, applyErrorCatcher } from './middlewares';

const app = express();

applyMiddleware(app);
applyRoutes(app);
applyErrorCatcher(app);

export default app;
