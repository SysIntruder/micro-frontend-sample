const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3033/",
  },

  resolve: {
    extensions: [".svelte", ".mjs", ".js", ".json"],
  },

  devServer: {
    port: 3033,
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
      name: "root_svelte",
      filename: "remoteEntry.js",
      remotes: {
        'app_vanilla': 'app_vanilla@http://localhost:3000/remoteEntry.js',
        'app_vue': 'app_vue@http://localhost:3001/remoteEntry.js',
        'app_react': 'app_react@http://localhost:3002/remoteEntry.js',
        'app_svelte': 'app_svelte@http://localhost:3003/remoteEntry.js',
        'app_lit': 'app_lit@http://localhost:3004/remoteEntry.js'
      },
      exposes: {},
      shared: {
        ...dependencies,
        svelte: {
          singleton: true,
          requiredVersion: dependencies.svelte,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};