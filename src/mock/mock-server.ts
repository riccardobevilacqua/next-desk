import { Server } from 'miragejs';

import { forecasts } from './mock-data';

const createMockserver = () => {
  new Server({
    routes() {
      this.namespace = 'api';

      this.get('/forecasts', () => forecasts);

      this.get("/forecasts/:id", (...args) =>
        forecasts.find(item => item.city.id.toString() === args[1].params.id)
      )
    },
  })
};

export { createMockserver };
