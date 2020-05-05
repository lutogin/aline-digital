import http from 'http';
import app from './app';
import { PORT } from '../config';

function startApp() {
  const server = http.createServer(app);
  server.listen(PORT);
  console.info(`✅  App listening on port ${PORT}`);

  return server;
}

export default startApp;
