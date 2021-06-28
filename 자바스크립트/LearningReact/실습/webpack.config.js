const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    resolve : { 
        extensions : ['.js', '.jsx'] 
    },
    output: {
        path: path.join(__dirname, '/dist'),            
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,                        
                exclude: /node_modules/,             
                use: {
                    loader: 'babel-loader',
                },
            }
        ]
    },
}