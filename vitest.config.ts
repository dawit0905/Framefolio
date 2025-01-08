import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [svelte(), tsconfigPaths()],
    test: {
        globals: true,
        include: ['src/**/*.{test,spec}.{js,ts}'],
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts', // 테스트 환경 설정 파일
    },
});
