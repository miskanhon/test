var webpack = require("webpack"),
    webpackConfig = require("./webpack.config");

webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        comments:false
    })
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