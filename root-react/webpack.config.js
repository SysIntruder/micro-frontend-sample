const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "http://localhost:3032/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3032,
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
      name: "root_react",
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
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        }
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};