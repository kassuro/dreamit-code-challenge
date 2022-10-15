# dreamIT-code-challenge

This is my submition for the coding challenge of dreamIT.

## The Task

Create a website for a lottery supplier using a fictive brand of your choice. The website has to contain a welcome page greeting the visitor as well as a lottery page for eurojackpot only.

The lottery page has to contain the drawing results which have to be fetched from the existing GraphQL endpoint https://www.lottohelden.de/graphql.

_**hint:** You might need to install the https://github.com/garmeeh/local-cors-proxy ‑ package to reach the endpoint from your local environment._

KEEP IT SIMPLE - remember: we're not looking for a full-blown business application, but a basis for discussion and further development. A simple text output for the result will do.

Please be sure to take care of the following things:

- Vuejs, Typescript and GraphQL have to be used. You may use a component library of your choice.
- The implementation should contain one or more components (i.e. be component based).
- The website should be responsive - by using CSS preprocessing.
- The application has to be tested (you can skip browser-tests).

You should follow clean code best practices, keep your solution simple and keep in mind that your implementation will be the base for discussions, refactoring and extension.

# Setup

## Env Variables needed

The app requires it to set the `VITE_APP_API_ENDPOINT` env variable in an `.env` file as it uses the vite dev server proxy and proxies `/graphql` to whatever is set in the env variable.

Of course this only works as long as we run the app with `vite`.

Just copy the provided `.env.dist` file and rename to `.env.local`.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
