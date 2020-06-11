module.exports = {
    entry: './src/app/index.js',
    output: {
      path: __dirname + '/src/public/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        }
      ]
    }
  };