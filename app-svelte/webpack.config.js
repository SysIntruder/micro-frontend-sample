const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3003/",
    chunkLoadingGlobal: 'appSvelte',
  },

  resolve: {
    extensions: [".svelte", ".mjs", ".js", ".json"],
  },

  devServer: {
    port: 3003,
  },

  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
        }
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
    new ModuleFederationPlugin({
      name: "app_svelte",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './Sidebar': './src/Sidebar'
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