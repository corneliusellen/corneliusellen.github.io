module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {presets: ['es2015']}
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
            {test: /\.(otf)$/, loader: "file-loader"},
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                  },
                },
              ],
            }
        ]
    }
};
