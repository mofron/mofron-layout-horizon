module.exports = {
    entry: __dirname + '/src/horizon.js',
    output: {
        path: __dirname + '/dist',
        filename: 'horizon.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
