module.exports = {
    purge: {
        enabled: false,
        content: ['./src/**/*.html', './src/**/*.handlebars'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                customBlue: '#0000A3',
                customBlack: '#0F0F0F'
            },
            height: {
                headerHeight: '70px',
                axiaHeight: '30px',
                cardHeight: '72px',
                arrowHeight: '38px',
                igHeight: '34px',
                beerCardHeight: '297px'
            },
            width: {
                axiaWidth: '43px',
                arrowWidth: '38px',
                igWidth: '34px',
                beerCardHeightWidth: '165px'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
