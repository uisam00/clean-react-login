const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv')

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production'
  const envFile = isProduction ? '.env.production' : '.env.development'
  const envPath = path.resolve(__dirname, envFile)
  const envVars = Dotenv.config({ path: envPath }).parsed || {}

  return {
    mode: 'development',
    entry: './src/main/index.tsx',
    output: {
      path: path.join(__dirname, 'public/js'),
      publicPath: '/public/js',
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'scss'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    devServer: {
      static: './public',
      devMiddleware: {
        writeToDisk: true,
      },
      historyApiFallback: true,
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DefinePlugin({
        'process.env': JSON.stringify(envVars),
      }),
    ],
  }
}
