import redis from 'redis';
import { promisify } from 'util';
import { REDIS_URL } from '../../config';

class DataStorageDao {
  constructor() {
    this.client = redis.createClient({ url: REDIS_URL });
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);
  }

  async get(key) {
    return this.getAsync(key);
  }

  async set(key, value) {
    return this.setAsync(key, value);
  }

  async del(key) {
    return this.delAsync(key);
  }
}

export default DataStorageDao;
