module.exports = {
    entry: {
        "main": "./js/main.js",
        "vendor": "./js/vendor.js"
    },
    output: {
        path: "./dist",
        filename: "[name]-bundle.js"
    },
    module: {
        loaders: [
        {
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        },
        {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }
        ]
    }
}