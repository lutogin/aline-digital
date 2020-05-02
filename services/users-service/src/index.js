import MicroMQ from 'micromq';
import redis from 'redis';
import {
  PORT,
  RABBITMQ_URL,
  REDIS_URL,
} from '../config';

const app = new MicroMQ({
  name: 'users',
  rabbit: {
    url: RABBITMQ_URL,
  },
});

const redisClient = redis.createClient({ url: REDIS_URL });

redisClient.on('error', (error) => {
  console.error(error);
});

redisClient.set('1', 'Mikhail Semin');
redisClient.set('2', 'Ivan Ivanov');
redisClient.set('status', 'Thinking...');

app.get('/friends', async (req, res) => redisClient
  .multi()
  .get('1')
  .get('2')
  .exec((err, data) => res.json(data)));

app.get('/status', async (req, res) => redisClient.get('status', (err, data) => res.json(data)));

app.start(PORT);
