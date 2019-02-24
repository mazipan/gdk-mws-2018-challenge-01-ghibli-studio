const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var config = {
  module: {}
};

var distConfig = Object.assign({}, config, {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|ico|svg)$/,
        use: "file-loader?name=./images/[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: ["node_modules", "src"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: "src/images", to: "images" }])
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
});

var docsConfig = Object.assign({}, config, {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|ico|svg)$/,
        use: "file-loader?name=./mws-ghibli-openapi/images/[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: ["node_modules", "src"]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/images", to: "mws-ghibli-openapi/images" }
    ])
  ],
  output: {
    path: __dirname + "/docs",
    publicPath: "/",
    filename: "bundle.js"
  }
});

module.exports = [distConfig, docsConfig];
