async function validationQuery(schema, data) {
  return schema.validateAsync(data);
}

export default validationQuery;
