import Joi from '@hapi/joi';
import GatewayController from '../gateway.controller';
import { key, value } from './schema/joi-schemas';

const keyValidation = Joi.object({
  key,
});

const keyValueValidation = Joi.object({
  key,
  value,
});

const validations = {
  [GatewayController.prototype.get.name]: keyValidation,
  [GatewayController.prototype.set.name]: keyValueValidation,
  [GatewayController.prototype.delete.name]: keyValidation,
};

export default validations;
