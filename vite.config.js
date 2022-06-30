const { resolve } = require('path')

// import vue from '@vitejs/plugin-vue'
//
// /**
//  * https://vitejs.dev/config/
//  * @type {import('vite').UserConfig}
//  */
// export default {
//     plugins: [vue()],
//     server: {                // ← ← ← ← ← ←
//         host: '0.0.0.0'    // ←  The new content  ←
//     }                        // ← ← ← ← ← ←
// }

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'pages.html'),
                blog: resolve(__dirname, 'blog.html'),
                profile: resolve(__dirname, 'profile.html')
            }
        }
    }
}

