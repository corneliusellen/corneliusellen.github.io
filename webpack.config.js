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
            {test: /\.(otf)$/, loader: "file-loader"}
        ]
    }
};
