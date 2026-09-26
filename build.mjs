import { build } from "esbuild";
await build({
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2020", "safari15", "chrome90", "firefox90", "edge90"],
  outfile: "public/js/app.js",
  legalComments: "eof",
  logLevel: "info",
});
