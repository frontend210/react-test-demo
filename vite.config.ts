import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { resolve } from 'path'

// @ts-ignore
const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@layouts': resolve(root, 'layouts'),
            '@pages': resolve(root, 'pages'),
            '@components': resolve(root, 'components'),
            '@store': resolve(root, 'store'),
            '@hooks': resolve(root, 'hooks'),
            '@api': resolve(root, 'api'),
            '@styles': resolve(root, 'styles'),
        },
    },
})
