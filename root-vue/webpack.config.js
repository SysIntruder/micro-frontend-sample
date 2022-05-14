const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3031/",
  },

  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3031,
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
      name: "root_vue",
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
        ...dependencies
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};