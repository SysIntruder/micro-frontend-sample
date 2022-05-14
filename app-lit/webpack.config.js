const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3004/",
    chunkLoadingGlobal: 'appLit',
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3004,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_lit",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './Navbar': './src/Navbar'
      },
      shared: {
        ...dependencies,
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};