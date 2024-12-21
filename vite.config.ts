import { defineConfig } from 'vite';
import { fileURLToPath ,URL} from 'node:url';
export default defineConfig({

    server: {
		open: true,
		port: 3000,
		host: '127.0.0.1',
	},
	preview: {
		open: true,
		port: 8080,
		host: '127.0.0.1',
	},
    resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})