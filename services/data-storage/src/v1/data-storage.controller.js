import DataStorageService from './data-storage.service';

class DataStorageController {
  constructor() {
    this.service = new DataStorageService();
  }

  async get(req, res) {
    const { key } = req.params;

    return res.json(await this.service.get(key));
  }

  async set(req, res) {
    const { key, value } = req.body;

    return res.json(await this.service.set(key, value));
  }

  async del(req, res) {
    const { key } = req.params;

    return res.json(await this.service.del(key));
  }
}

export default DataStorageController;
