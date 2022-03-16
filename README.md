# Vue 3 + Typescript + Vite

```
# npm 6.x
npm init vite@latest my-vue-app --template vue
```

### 1.安装 sass

```
npm install -D sass
```

### 2.处理 CSS 前缀

```
npm install -D autoprefixer
```

### 3.将 px 单位转换为 vw 单位,根据视口大小来调整宽度.

```
npm install -D postcss-px-to-viewport
```

### 4.安装 element-plus 组件库

```
npm install element-plus --save
```

Volar 支持

```
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

### 5.按需自动导入

```
npm install -D unplugin-vue-components unplugin-auto-import
```

```
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```

### 6.更改 element-plus 主题

```
// styles/element/index.scss
/* 只需要重写你需要的即可 */
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': green,
    ),
  ),
);
```

```
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: "sass"
      })],
    }),
  ],
});
```

### 7.解决引入 ElementPlus 项目打包报错

```
// 在 package.json build 脚本命令行中添加 --skipLibCheck 跳过声明文件(扩展名为 .d.ts 的文件)的类型检查
"scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit --skipLibCheck && vite build",
    "serve": "vite preview"
  },
```

### 8.配置别名和省略的扩展名列表

```
// vite.config.ts
export default defineConfig({
  plugins: [
    // ...
    resolve: {
      alias: {
        '@': '/src'
      },
      extensions: ['.ts', '.js', '.json', '.scss']
    }
  ],
});
```

```
// tsconfig.json
"compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
}
```

### 9.配置 eslint + prettier + vue3 + ts 规范代码

### (1). 安装 eslint，在项目根目录新建 .eslintrc.js 文件

```
npm install eslint --save-dev
```

### (2). 配置 prettier 规则

```
npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev
```

-   prettier: 根据规范，自动格式化代码。具有比 eslint auto-fix 更加强大的代码规范性修复能力。
-   eslint-plugin-prettier：将 prettier 的能力集成到 eslint 中。按照 prettier 的规则检查代码规范性，并进行修复。
-   eslint-config-prettier：让所有可能会与 prettier 规则存在冲突的 eslint rule 失效，并使用 prettier 的规则进行代码检查。

```
// .prettierrc.json
{
  "useTabs": false,
  "tabWidth": 4,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": false,
  "endOfLine": "auto"
}
```

#### (3). 配置 typescript 语法 eslint 检查

```
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

-   @typescript-eslint/parser：让 eslint 认识 ts 语法。
-   @typescript-eslint/eslint-plugin：指定 ts 代码的规范。

#### (4). 配置 vue 语法 eslint 检查

```
npm install eslint-plugin-vue --save-dev
```

```
// .eslintrc.js
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'plugin:vue/vue3-recommended', // Vue.js 3.x.
    // 'plugin:vue/recommended' // Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```

#### (5). 完整配置

```
// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    rules: {}
}
```

#### (6). 配置 vscode 保存代码，自动格式化

```
// settings.json
"editor.formatOnSave": true
```

#### (7). 忽略 eslint 检测

```
// .eslintignore
node_modules
dist
README.md
yarn.lock
.gitignore
```
