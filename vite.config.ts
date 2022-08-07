import { defineConfig } from "vite";

/** Used to fix NextJS with Ladle */
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  publicDir: `${process.cwd()}/public`,
});
