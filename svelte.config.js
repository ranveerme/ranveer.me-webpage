import adapter from "@sveltejs/adapter-static"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  preprocess: [
    vitePreprocess({
      postcss: true,
      typescript: {
        tsconfigFile: "./tsconfig.json",
        compilerOptions: {
          verbatimModuleSyntax: true,
        },
      },
    }),

    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),

    alias: {
      $components: resolve(__dirname, "./src/lib/components"),
      $stores: resolve(__dirname, "./src/lib/stores"),
      $styles: resolve(__dirname, "./src/lib/styles"),
      $utils: resolve(__dirname, "./src/lib/utils"),
      $src: resolve(__dirname, "./src"),
    },

    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path.startsWith("/test/") && referrer === "/test") {
          return
        }

        throw new Error(message)
      },
    },
  },
}

export default config