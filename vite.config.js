import { ViteFaviconsPlugin } from "vite-plugin-favicon";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    ViteFaviconsPlugin({
      logo: "./assets/logo.svg",
      inject: true,
    }),
  ],
};
