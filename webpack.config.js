const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.ts',
        main_js: './src/index.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader'
                }
            }   
        ]
    },

    devtool: false,

    resolve: {
        extensions: ['.ts', '.js']
    }
}