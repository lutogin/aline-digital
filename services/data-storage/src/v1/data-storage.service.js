import DataStorageDao from './data-storage.dao';

class DataStorageService {
  constructor() {
    this.dao = new DataStorageDao();
  }

  async get(key) {
    return this.dao.get(key);
  }

  async set(key, value) {
    return this.dao.set(key, value);
  }

  async del(key) {
    return this.dao.del(key);
  }
}

export default DataStorageService;
