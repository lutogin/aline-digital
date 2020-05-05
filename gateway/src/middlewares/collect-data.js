function collectData(req) {
  return {
    ...req.query,
    ...req.params,
    ...req.body,
  };
}

export default collectData;
