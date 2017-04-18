// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
path = require('path');
const isDebug = !process.argv.includes('--release');
pkg = require('../package.json');


// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel-loader',
//         include: [
//           path.resolve(__dirname, '../src'),
//         ],
//         query: {
//           // https://github.com/babel/babel-loader#options
//           cacheDirectory: isDebug,
//
//           // https://babeljs.io/docs/usage/options/
//           babelrc: false,
//           presets: [
//             // A Babel preset that can automatically determine the Babel plugins and polyfills
//             // https://github.com/babel/babel-preset-env
//             ['env', {
//               targets: {
//                 browsers: pkg.browserslist,
//               },
//               modules: false,
//               useBuiltIns: false,
//               debug: false,
//             }],
//             // Experimental ECMAScript proposals
//             // https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
//             'stage-2',
//             // JSX, Flow
//             // https://github.com/babel/babel/tree/master/packages/babel-preset-react
//             'react',
//             // Optimize React code for the production build
//             // https://github.com/thejameskyle/babel-react-optimize
//             ...isDebug ? [] : ['react-optimize'],
//           ],
//           plugins: [
//             // Adds component stack to warning messages
//             // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source
//             ...isDebug ? ['transform-react-jsx-source'] : [],
//             // Adds __self attribute to JSX which React will use for some warnings
//             // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-self
//             ...isDebug ? ['transform-react-jsx-self'] : [],
//           ],
//         },
//       },
//       {
//         test: /\.css/,
//         use: [
//           {
//             loader: 'isomorphic-style-loader',
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               // CSS Loader https://github.com/webpack/css-loader
//               importLoaders: 1,
//               sourceMap: isDebug,
//               // CSS Modules https://github.com/css-modules/css-modules
//               modules: true,
//               localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
//               // CSS Nano http://cssnano.co/options/
//               minimize: !isDebug,
//               discardComments: { removeAll: true },
//             },
//           },
//           {
//             loader: 'postcss-loader',
//             options: {
//               config: './tools/postcss.config.js',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.md$/,
//         loader: path.resolve(__dirname, './lib/markdown-loader.js'),
//       },
//       {
//         test: /\.txt$/,
//         loader: 'raw-loader',
//       },
//       {
//         test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
//         loader: 'file-loader',
//         query: {
//           name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
//         },
//       },
//       {
//         test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
//         loader: 'url-loader',
//         query: {
//           name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
//           limit: 10000,
//         },
//       },
//     ],
//   }
// };

module.exports = {
  module: {
    loaders: [
      {
        test: /.css$/,
        loaders: ["style", "css"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
