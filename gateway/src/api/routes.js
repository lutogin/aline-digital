import express from 'express';
import gatewayRoutes from './v1/gateway.routes';

const router = express.Router();

router.use('/', gatewayRoutes);

export default router;
