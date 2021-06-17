module.exports = {
    purge: {
        enabled: false,
        content: ['./src/**/*.html', './src/**/*.handlebars'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#0000A3',
                    black: '#0F0F0F'
                }
            },
            height: {
                header: '70px',
                brand: '30px',
                card: '72px',
                arrow: '38px',
                instagram: '34px',
                beerCard: '297px'
            },
            width: {
                brand: '43px',
                arrow: '38px',
                instagram: '34px',
                beerCard: '165px'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
