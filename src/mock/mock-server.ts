import { Server } from 'miragejs';

import { forecasts } from './mock-data';

const createMockserver = () => {
  new Server({
    routes() {
      this.namespace = 'api';

      this.get('/forecasts', () => ({ forecasts }));
    }
  })
};

export { createMockserver };
