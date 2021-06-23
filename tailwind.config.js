module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.html', './src/**/*.handlebars'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'poppins': ['Poppins']
        },
        extend: {
            colors: {
                primary: {
                    blue: '#0000A3',
                    black: '#0F0F0F',
                    gray: '#E5E5E5',
                    lightgray: '#F4F4F4',
                    white: '#FFFFFF'
                }
            },
            height: {
                header: '70px',
                brand: '30px',
                card: '72px',
                arrow: '38px',
                instagram: '34px',
                btnAdd: '35px',
                filter: '18px',
                filterCard: '284px'
            },
            width: {
                brand: '43px',
                arrow: '38px',
                instagram: '34px',
                modal: '123px',
                filter: '18px'
            },
            spacing: {
                gutter: '15px',
                brand: '15.5px',
                modal: '10px',
                smallSpace: '7.5px',
                modalInside: '13.5px',
                cleanDistance: '9.5px',
                cleanxDistance: '54px'
            },
            margin: {
                distance: '18px',
                filter: '10.75px'
            },
            fontSize: {
                tiny: '11px',
                sizeLetter: '14.16px',
                smallLetter: '0.738rem',
                wine: '1.53rem',
                filter: '20.4px'
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
        }
    },
    plugins: [

    ],
}
