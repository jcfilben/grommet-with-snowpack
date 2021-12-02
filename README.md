# grommet-with-snowpack
This repo shows a workaround to use Grommet with Snowpack.

There is a [known error](https://github.com/withastro/snowpack/issues/2908) with Snowpack and `styled-components` where if a dependency of a dependency in a Snowpack project uses `styled-components` the build will fail and receive an error along the lines of `_styledComponents.default is not a function`. This happens because `styled-components` gets transpiled incorrectly by Snowpack from ESM to CJS and the styled function exported by `styled-components` get incorrectly wrapped with an extra default. Where `_styledComponents.default` fails, `_styledComponents.default.default` will succeed.

The reference to `_styledComponents.default` occurs in the `StyledIcon.js` file in `grommet-icons`. The workaround uses `package-patch` to change the `StyledIcon.js` file to match the `StyledIcon.js` file in the ES6 folder. Thie ES6 version of the `StyledIcon.js` file doesn't reference the default export of `styled-components` and instead imports and uses `styled` from `styled-components`.
