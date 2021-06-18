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
                    black: '#0F0F0F',
                    gray: '#E5E5E5',
                    lightgray: '#F4F4F4'
                }
            },
            height: {
                header: '70px',
                brand: '30px',
                card: '72px',
                arrow: '38px',
                instagram: '34px',
                beerCard: '278px',
                beerImg: '140px',
                btnAdd: '35px'
            },
            width: {
                brand: '43px',
                arrow: '38px',
                instagram: '34px',
                beerCard: '165px',
                beerImg: '137px'
            },
            padding: {
                container: '15px'
            },
            margin:{
                container: '15px',
                distancePrice: '12px'
            },
            fontSize: {
                tiny: "11px",
                sizeLetter: "14.16px"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
