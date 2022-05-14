const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
    chunkLoadingGlobal: 'appVanilla',
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
      name: "app_vanilla",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './Title': './src/Title'
      },
      shared: {
        ...dependencies
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};