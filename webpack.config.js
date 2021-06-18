const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

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
        new GenerateJsonPlugin('beers.json', {
            "products": [
                {
                    "name": "Cassels Milk Stou",
                    "description": "Cassels & Sons Brewing. Cerveza porter y stout.",
                    "price": 75000,
                    "img": "img/cassels.png",
                    "filterId": 1
                },
                {
                    "name": "Camba Pale Ale",
                    "description": "La Souche Franc-Bois d’hiver. Cerveza pale.",
                    "price": 85300,
                    "img": "img/camba.png",
                    "filterId": 2
                },
                {
                    "name": "Votus Nº 001",
                    "description": "India Pale Ale del año 2019. Nº 001 Red IPA.",
                    "price": 75000,
                    "img": "img/votus.png",
                    "filterId": 3
                },
                {
                    "name": "Prairie Artisian",
                    "description": "Ales Prairie Noir Whiskey Barrel Aged Imperial Stout 12oz.",
                    "price": 85300,
                    "img": "img/prairie-artisian.png",
                    "filterId": 1
                },
                {
                    "name": "Lost Abbey",
                    "description": "The Lost Abbey Citrus Sin American Wild Ale 750ml.",
                    "price": 75000,
                    "img": "img/lost-abbey.png",
                    "filterId": 2
                },
                {
                    "name": "Prairie",
                    "description": "Prairie Artisa Ales Paradise Imperial Stout 12oz.",
                    "price": 85300,
                    "img": "img/prairie.png",
                    "filterId": 3
                },
                {
                    "name": "Redrice",
                    "description": "Hitachino Nest Beer Red Rice Ale 330ml.",
                    "price": 85300,
                    "img": "img/redrice.png",
                    "filterId": 1
                },
                {
                    "name": "Cascade",
                    "description": "Cascade Brewing 2017 Brunch Line BA NORTHWEST Sour Ale.",
                    "price": 175000,
                    "img": "img/cascade.png",
                    "filterId": 2
                },
                {
                    "name": "Topa Topa",
                    "description": "Topa Topa BREWING CO. 5th Year Anniversary clear Ipa 16oz.",
                    "price": 85300,
                    "img": "img/topa.png",
                    "filterId": 3
                },
                {
                    "name": "Mira Brune Nº 6",
                    "description": "Brown Ale, Brown Mira American Style.",
                    "price": 375000,
                    "img": "img/mira.png",
                    "filterId": 1
                }
            ]
          }),
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
