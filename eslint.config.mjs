import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [...nextCoreWebVitals, // ✅ 添加自定义规则
...nextTypescript, {
  // 可作用于所有文件，也可以指定特定的 files
  rules: {
    "no-console": "error", // 禁止所有 console
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "scripts/**"]
}];

export default eslintConfig;
