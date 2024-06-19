import { createPinia } from 'pinia';
import { resetSetupStore } from './plugins';

/** Setup Vue store plugin pinia */
export function setupStore(app) {
  const store = createPinia();

  store.use(resetSetupStore);

  app.use(store);
}
