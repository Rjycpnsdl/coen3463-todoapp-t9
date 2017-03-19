const path = require('path');

module.exports = {
    entry:{
       app: './app/index'
    },
    output:{
        path: path.join(__dirname, '/public/js'),
        publicPath: "/",
        filename: '[name].bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader:'babel-loader', 
                exclude:'/node_modules' 
            },
            {
                test: /\.css$/, 
                loader:'style-loader!css-loader'
            }
        ]
    },
}