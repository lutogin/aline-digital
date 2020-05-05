import DataStorageConnector from './data-storage.connector';

function applyRoutes(app) {
  app.get('/:key', DataStorageConnector.get.bind(DataStorageConnector));

  app.post('/', DataStorageConnector.set.bind(DataStorageConnector));

  app.delete('/:id', DataStorageConnector.del.bind(DataStorageConnector));
}

export default applyRoutes;
