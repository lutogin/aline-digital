import app from './app';
import { PORT } from '../config';

async function startApp() {
  app.start(PORT);
}

export default startApp;
