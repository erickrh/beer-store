module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.html', './src/**/*.handlebars'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                myColor: '#0000A3',
                myBg: '#0F0F0F'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
