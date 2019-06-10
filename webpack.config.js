const path = require('path');

module.exports = {
    entry: './src/Valid88.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'Valid88.js',
        library: 'Valid88',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: `(typeof self !== 'undefined' ? self : this)`    
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
  