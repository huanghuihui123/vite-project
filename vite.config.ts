import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' // 兼容传统浏览器
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/styles/element/index.scss" as *;`
            }
        }
    },
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()]
            // imports: ['vue', 'vue-router']
        }),
        Components({
            // dirs: ['./src/components'], // 要搜索组件的目录的相对路径
            // deep: true, // 搜索子目录
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass'
                })
            ]
        })
    ],
    resolve: {
        alias: {
            '@': '/src'
        },
        extensions: ['.ts', '.scss', '.js', '.json']
    }
})
