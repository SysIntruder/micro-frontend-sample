const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
    chunkLoadingGlobal: 'appVue',
  },

  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
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
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "app_vue",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './Footer': './src/Footer'
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