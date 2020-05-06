import DataStorageDao from './data-storage.dao';

class DataStorageService {
  constructor() {
    this.dao = new DataStorageDao();
  }

  // eslint-disable-next-line class-methods-use-this
  async makeResponse(data) {
    return {
      success: !!data,
      data,
    };
  }

  async get(key) {
    return this.makeResponse(await this.dao.get(key));
  }

  async set(key, value) {
    return this.makeResponse(await this.dao.set(key, value));
  }

  async del(key) {
    return this.makeResponse(await this.dao.del(key));
  }
}

export default DataStorageService;
