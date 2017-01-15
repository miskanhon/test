var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require("path");

var folderPaths = {
        root: path.join(__dirname, "../public"),
        output: {
            path: path.join(__dirname, "../public/build"),
            publicPath: "/build/"
        },
        eslint: path.join(__dirname, "../.eslintrc.json")
    },
    extractSCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
    context: folderPaths.root,
    entry: {
        app: [
            "./scripts/app.js"
        ]
    },
    output:{
        filename: "bundle.js",
        path: folderPaths.output.path,
        publicPath: folderPaths.output.publicPath
    },
    module:{
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["ng-annotate-loader", "babel-loader"]
            },
            {
                test: /\.scss$/i,
                loader: extractSCSS.extract(['css-loader','sass-loader'])
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate!html'
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        extractSCSS
    ],
    eslint: {
        configFile: folderPaths.eslint
    }
}