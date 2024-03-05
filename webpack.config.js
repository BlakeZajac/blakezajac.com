const path = require('path');

// css extraction and minification
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// clean out build dir in-between builds
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
    {
        mode: 'production',
        entry: {
            'main': [
                './src/js/script.js',
                './src/scss/style.scss'
            ]
        },
        output: {
            filename: './build/js/[name].min.js',
            path: path.resolve(__dirname)
        },
        module: {
            rules: [
                // js babelization
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // sass compilation
                {
                    test: /\.(sass|scss)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
            ]
        },
        plugins: [
            // clear out build directories on each build
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                    './build/js/*',
                    './build/css/*'
                ]
            }),
            // css extraction into dedicated file
            new MiniCssExtractPlugin({
                filename: './build/css/style.min.css'
            }),
        ],
        optimization: {
            // minification - only performed when mode = production
            minimizer: [
                // js minification - special syntax enabling webpack 5 default terser-webpack-plugin 
                `...`,
                // css minification
                new CssMinimizerPlugin(),
            ]
        },
    }
];