import { createApp } from 'vue';
import './styles/style.css';
import App from './App.vue';
import { setupStore } from './stores';
import { setupRouter } from './router';
import './assets/index.css';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';

import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

const setupApp = () => {
    const app = createApp(App);
    app.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                cssLayer: false,
                darkModeSelector: 'light'
            }
        }
    });
    app.directive('tooltip', Tooltip);
    setupStore(app);
    setupRouter(app);
    app.mount('#app');
};

setupApp();
