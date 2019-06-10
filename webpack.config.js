const path = require('path');

module.exports = {
    entry: './src/Valid88.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'Valid88.js',
        library: 'Valid88',
        umdNamedDefine: true,
        globalObject: 'this' //!!!This line
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
  