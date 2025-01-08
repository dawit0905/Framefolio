import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit(), tsconfigPaths()],
	define: {
		'process.env': process.env
	},
	resolve: {
		alias: { $db: '/src/db/' },
	},
});
