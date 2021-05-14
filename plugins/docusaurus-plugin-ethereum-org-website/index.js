/**
 * The ethereum-org-website is written in ES that needs to be transpiled
 * before we can use the components in our app. This Docusaurus plugin
 * sets up the transpilation so the components can be imported without
 * issue. Note that `node_modules` is NOT excluded in the module rules!
 */

module.exports = function (context, options) {
  return {
    name: "docusaurus-plugin-ethereum-org-website",
    configureWebpack(config, isServer, utils) {
      const { getBabelLoader } = utils;
      const babelLoader = getBabelLoader(isServer);

      return {
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              use: [
                {
                  ...babelLoader,
                  options: {
                    ...babelLoader.options,
                    plugins: [
                      ...(babelLoader.options.plugins || []),
                      "@babel/plugin-proposal-class-properties",
                    ],
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};
