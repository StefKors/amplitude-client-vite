// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';


export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'amplitude',
      // the proper extensions will be added
      fileName: 'amplitude',
    },
    rollupOptions: {
      plugins: [
        // json(),
        // rollupresolve({
        //   browser: true,
        // }),
        replace({
          preventAssignment: true,
          BUILD_COMPAT_SNIPPET: 'true',
          BUILD_COMPAT_LOCAL_STORAGE: 'true',
          BUILD_COMPAT_2_0: 'true',
        }),
      ],
      output: {
        format: 'iife',
      }
      // // make sure to externalize deps that shouldn't be bundled
      // // into your library
      // external: ['vue'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    },
  },
})