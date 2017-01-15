var webpack = require("webpack"),
    WebpackDevServer = require("webpack-dev-server"),
    webpackConfig = require("./webpack.config");

var PORT = 5555;

webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:" + PORT + "/", "webpack/hot/dev-server");
webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

var compiler = webpack(webpackConfig, function(err, stats){
    if(err){
        throw err;
    }else if (stats){
        process.stdout.write(stats.toString("normal"));
    }else {
        console.log("No webpack error but no stats are available");
    }
});

var server = new WebpackDevServer(compiler, {
    contentBase: "./public",
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: false,
    stats: {
        colors: true
    }
});
server.listen(PORT, function(){
    process.stdout.write("Server is now running on port : " + PORT);
});

