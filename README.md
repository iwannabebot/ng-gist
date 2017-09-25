# ng-gist
**AOT/JIT** compatible Angular component to embed Gist

# Quick Start

```bash
# Clone the repository
git clone https://github.com/iwannabebot/ng-gist.git

# Go to repository folder
cd ng-gist

# Install all dependencies
yarn install

# Build the library
yarn build
```
## Build the library
- `yarn build` for building the library once (both ESM and AOT versions).
- `yarn build:watch` for building the library (both ESM and AOT versions) and watch for file changes.

You may also build UMD bundle and ESM files separately:
- `yarn build:esm` - for building AOT/JIT compatible versions of files.
- `yarn build:esm:watch` - the same as previous command but in watch-mode.
- `yarn build:umd` - for building UMD bundle only.
- `yarn build:umd:watch` - the same as previous command but in watch-mode.


## Commands
- `yarn lint` for performing static code analysis.
- `yarn test` for running all your `*.spec.ts` tests once. Generated code coverage report may be found in `coverage` folder.
- `yarn test:watch` for running all you `*.spec.ts` and watch for file changes.
- `yarn docs` for generating documentation locally.
- `yarn gh-pages` for generating documentation and uploading it to GitHub Pages.
- `yarn explorer` to find out where all your code in bundle is coming from.
- `npm version patch` to increase library version. [More on bumping](https://docs.npmjs.com/cli/version).
- `npm publish` to publish your library sources on [npmjs.com](https://www.npmjs.com/).
- `yarn clean:tmp` command will clean up all temporary files like `docs`, `dist`, `coverage` etc.
- `yarn clean:all` command will clean up all temporary files along with `node_modules` folder. 

> Built upon [Angular Library Seed](https://github.com/trekhleb/angular-library-seed) by [trekhleb](https://github.com/trekhleb)