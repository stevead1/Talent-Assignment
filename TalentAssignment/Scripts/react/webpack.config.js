module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
        test: './reactscript/index.jsx',
        customer: './reactscript/customerIndex.jsx',
        navbar: './reactscript/navbarIndex.jsx',
        productSold: './reactscript/productSoldIndex.jsx',

    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },

    watch: true,
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'], 
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        }]
    }
}