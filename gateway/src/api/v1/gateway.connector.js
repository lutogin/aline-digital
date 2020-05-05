import GatewayController from './gateway.controller';
import joinValidation from '../../lib/decorators/join-validation';
import requestRules from './validations/validation-request';

const validationMethods = {
  requestRules,
};

const currentController = new (joinValidation(validationMethods)(GatewayController))();

export default currentController;
