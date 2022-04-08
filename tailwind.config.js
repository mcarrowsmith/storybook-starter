const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./stories/**/*.{js,mdx,html}"],
    theme: {
        extend: {
            colors: {
                'brand-white': '#EFEBE3',
                'brand-off-white': '#f4f1ef',
                'brand-red': '#C12B3D',
                'brand-blue': '#154768',
                'brand-black': '#2B2B2B'
            },
            fontFamily: {
                sans: [
                    'SourceSansPro-Regular',
                    ...defaultTheme.fontFamily.sans,
                ],
                serif: [
                    "'Noe Display Medium'",
                    ...defaultTheme.fontFamily.serif,
                ]
            }
        },
    },
    plugins: [
        plugin(function({ addComponents, theme }) {
            const components = {
                '.heading-1': {
                    fontFamily: theme('fontFamily.serif'),
                    color: theme('colors.brand-blue'),
                    fontSize: theme('fontSize.4xl'),
                    marginBottom: theme('margin.4')
                },
                '.heading-2': {
                    fontFamily: theme('fontFamily.serif'),
                    color: theme('colors.brand-blue'),
                    fontSize: theme('fontSize.xl'),
                    marginBottom: theme('margin.12')
                },
            };
            addComponents(components);
        })
    ],
}
