# `ng-gist` demo projects

> This folder contains two demo-projects (`esm` and `umd` folders) for [ng-gist](https://github.com/iwannabebot/ng-gist). These demo projects may help you to test whether your library supports AOT/JIT/UMD builds or not.
>
> - `esm` folder contains Angular project that is built using [@angular/compiler](https://www.npmjs.com/package/@angular/compiler) and [Webpack](https://webpack.js.org/). This demo project utilizes ESM (pure ES2015) sources of your library to do two kind of compilations:
>   - [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) (ahead-of-time) compilation.
>   - [JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) (just-in-time) compilation.
>
> - `umd` folder contains Angular project that is being built and assembled in browser by [SystemJS](https://github.com/systemjs/systemjs). This demo project utilizes [UMD](https://github.com/umdjs/umd) bundle of your library.

Demo-projects are created as an alternative to `npm link` command. You may simply delete this `demo` folder if you prefer to use [yarn link](https://yarnpkg.com/en/docs/cli/link) instead to check how your library is being built.

# Quick Start

```bash
# Assuming the you are already in ng-gist/demo folder

# Install all dependencies
yarn install

# Start watching library dist folder and do JIT project build in watch mode.
yarn start

# Or you may simply build AOT/JIT/UMD versions all at once by running the following command
yarn build
```

# Getting Started

## Dependencies

#### Node/NPM
Install latest Node and NPM following the [instructions](https://nodejs.org/en/download/). Make sure you have Node version ≥ 7.0 and NPM ≥ 4.

- `brew install node` for Mac.

#### Yarn
Install Yarn by following the [instructions](https://yarnpkg.com/en/docs/install).

- `brew install yarn` for Mac.

## Installing
- Switch to `demo` folder in your console.
- `yarn install` to install required dependencies.


## Build demo projects
- `yarn build` for building AOT, JIT and UMD demo versions all at once.

You may also build projects separately:
- `yarn build:jit` - for building JIT version of demo project.
- `yarn build:aot` - for building AOT version of demo project.
- `yarn build:umd` - for building UMD version of demo project.

To see your library in action launch the following files in your browser:
- `ng-gist/demo/esm/dist/jit/index.html` file for JIT build
- `ng-gist/demo/esm/dist/aot/index.html` file for AOT build
- `ng-gist/demo/umd/index.html` file for UMD build

## Build JIT project in watch mode
- `yarn start` for building JIT version of demo project and start watching for library changes.

This command may be used simultaneously in combination with [ng-gist](https://github.com/iwannabebot/ng-gist)'s `yarn build:watch`. As a result once you change library source code it will be automatically re-compiled and in turn your JIT demo-project will be automatically re-built and you will be able to see that changes in your browser instantly. 


## Other commands

#### Cleaning
- `yarn clean:tmp` command will clean up all temporary files like `dist`, `lib`, `*.ngsummary.json` etc.
- `yarn clean:all` command will clean up all temporary files along with `node_modules` folder. 
