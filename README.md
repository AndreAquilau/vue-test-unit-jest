# vue-tests

## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run serve
```

### Compiles and minifies for production

```
pnpm run build
```

### Lints and fixes files

```
pnpm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Starting config unit jest with vue plugin cli

```shell
vue add unit-jest
```

```shell
pnpm install
```

### Add command script package.json

```js
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    ++"test:watch": "jest --verbose --watch",
    "lint": "vue-cli-service lint"
  },
```

### References

[Git vuejs/test-utils](https://github.com/vuejs/test-utils/)\
[Guide test-utils](https://test-utils.vuejs.org/guide/)\
[Jest Docs](https://jestjs.io/docs/getting-started)
