import type { OutputOptions, ModuleFormat } from "rollup";

import { parallel } from "gulp";
import { rollup } from "rollup";
import { resolve } from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";

const build = async (minify: boolean) => {
  const bundle = await rollup({
    input: resolve("../../packages/components", "index.ts"),
    treeshake: true,
    plugins: [
      json(),
      nodeResolve({
        extensions: [".mjs", ".js", ".json", ".ts", ".tsx"],
      }),
      commonjs(),
      esbuild({
        minify,
        treeShaking: true,
        sourceMap: true,
        target: "es2018",
      }),
    ],
    external: ["react", "react-dom"],
  });

  await Promise.all(
    [
      {
        format: "umd" as ModuleFormat,
        file: resolve("../../dist", minify ? "index.full.min.js" : "index.full.js"),
        exports: "named" as "default" | "named" | "none" | "auto",
        name: "halo",
        sourcemap: true,
        // banner: banner,
        globals: {
          vue: "Vue",
        },
      },
      {
        format: "esm" as ModuleFormat,
        file: resolve("../../dist", minify ? "index.full.min.mjs" : "index.full.mjs"),
        sourcemap: false,
        // banner: banner,
      },
    ].map((item: OutputOptions) => {
      bundle.write(item);
    })
  );
};

export const buildFull = parallel(
  () => build(false),
  () => build(true)
);
