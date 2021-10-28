let node = "development"

if (process.env.NODE_env === "production"){
    mode = "production";
}

module.exports = {
    mode: node,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
    }
}