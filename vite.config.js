// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//     base: '/',
//   }

//   if (command !== 'serve') {
//     config.base = '/coopera-Frontend/'
//   }

//   return config
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { styleImport } from "vite-plugin-style-import";
export default defineConfig({
  plugins: [
    react(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "react-datepicker",
    //       esModule: true,
    //       resolveStyle: () => "react-datepicker/dist/react-datepicker.css",
    //     },
    //   ],
    // }),
  ],
});