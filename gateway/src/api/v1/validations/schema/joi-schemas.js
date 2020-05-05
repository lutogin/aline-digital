import Joi from '@hapi/joi';

export const key = Joi
  .string()
  .required();

export const value = Joi
  .required();
