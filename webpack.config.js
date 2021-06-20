const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const beers = require('./src/beers.json');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.[contenthash].js',
        assetModuleFilename: 'img/[name][ext][query]', // Images in folder.
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new GenerateJsonPlugin('beers.json', beers),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext][query]',
                },
            },
            {
                test: /\.(handlebars|hbs)$/,
                loader: 'handlebars-loader',
            },
            {
                // Minify Images
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.9, 0.9],
                        speed: 4,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75,
                    },
                },
            },
        ],
    },
};
