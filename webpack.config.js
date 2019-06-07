const path = require('path');

module.exports = {
    entry: './src/Valid88.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Valid88.js',
        library: 'Valid88'
    },
    externals: {
        lodash: {
           commonjs: 'lodash',
           commonjs2: 'lodash',
           amd: 'lodash',
           root: '_'
        }
    }
};
  