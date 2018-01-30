const path = require('path');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    watch: true,

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!resolve-url-loader!sass-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                loader: "file-loader",
                query: {
                    name: 'assets/[name].[ext]'
                }
            }
        ]
    }

};