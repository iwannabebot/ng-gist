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


> Built upon [Angular Library Seed](https://github.com/trekhleb/angular-library-seed) by [trekhleb](https://github.com/trekhleb)