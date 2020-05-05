class GatewayController {
  // eslint-disable-next-line class-methods-use-this
  async get(req, res) {
    return res.delegate('data-storage');
  }

  // eslint-disable-next-line class-methods-use-this
  async set(req, res) {
    return res.delegate('data-storage');
  }

  // eslint-disable-next-line class-methods-use-this
  async delete(req, res) {
    return res.delegate('data-storage');
  }
}

export default GatewayController;
