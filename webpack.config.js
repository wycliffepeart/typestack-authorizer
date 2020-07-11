const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './dist/index.js',
  output: {
    libraryTarget: "umd",
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
};