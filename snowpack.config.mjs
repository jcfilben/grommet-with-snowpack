/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    // public: { url: '/', static: true },
    // src: { url: '/dist' },
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    "knownEntrypoints": ["styled-components"]
    // packageLookupFields: ['main'],
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    'grommet': 'grommet/dist/es6',
    // 'grommet-icons': 'grommet-icons/es6'
  },
};
