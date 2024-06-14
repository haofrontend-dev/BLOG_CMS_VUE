import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import process from 'node:process';
import { URL, fileURLToPath } from 'node:url';
import dayjs from 'dayjs';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
    const viteEnv = loadEnv(configEnv.mode, process.cwd());
    const buildTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

    const proxy = {
        api: viteEnv.VITE_BASE_URL + 'api'
    };

    return {
        base: viteEnv.VITE_BASE_URL || '/',
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
                '~': fileURLToPath(new URL('./', import.meta.url)),
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        preview: {
            port: 9725
        },

        server: {
            host: '0.0.0.0',
            port: 9527,
            open: true,
            proxy: {
                [proxy.api]: {
                    target: viteEnv.VITE_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(viteEnv.VITE_BASE_URL, '')
                }
            }
        },
        define: {
            BUILD_TIME: JSON.stringify(buildTime),
            define: {
                'process.env': viteEnv
            }
        },
        css: {
            postcss: {
                plugins: [tailwind(), autoprefixer()]
            }
        }
    };
});
