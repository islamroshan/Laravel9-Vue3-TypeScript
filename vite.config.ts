import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/scss/app.scss',
            'resources/js/app.ts',
        ]),
    ],
});