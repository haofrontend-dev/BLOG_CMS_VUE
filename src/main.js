import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import { setupStore } from './stores';
import { setupRouter } from './router';
import './assets/index.css'

const setupApp = () => {
    const app = createApp(App);
    setupStore(app);
    setupRouter(app);
    app.mount('#app')
}

setupApp();
