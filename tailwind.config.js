const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./stories/**/*.{js,mdx,html}"],
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
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
        plugin(function({ addBase, theme}) {
            const base = {
                ':root': {
                    // Fluid typography from 1 rem to 1.2 rem with fallback to 16px.
                    fontSize: '100%',
                    'font-size': 'clamp(1rem, 1.6vw, 1.2rem)',
                    // Safari resize fix.
                    minHeight: '0vw',
                },
                // Used to hide alpine elements before being rendered.
                '[x-cloak]': {
                    display: 'none !important'
                },
                // Implement the focus-visible polyfill: https://github.com/WICG/focus-visible
                '.js-focus-visible :focus:not(.focus-visible)': {
                    outline: 'none',
                },
                // Display screen breakpoints in debug environment.
                '.breakpoint:before': {
                    display: 'block',
                    color: theme('colors.notice.900'),
                    textTransform: 'uppercase',
                    content: '"-"',
                }
            };

            addBase(base);
        }),

        plugin(function({ addBase, theme}) {
            const breakpoints = Object.entries(theme('screens'))
                .filter(value => typeof value[1] == 'string')
                .sort((a, b) => {
                    return a[1].replace(/\D/g, '') - b[1].replace(/\D/g, '')
                })
                .map((value) => {
                    return {
                        [`@media (min-width: ${value[1]})`]: {
                            '.breakpoint::before': {
                                content: `"${value[0]}"`,
                            }
                        }
                    }
                });

            addBase(breakpoints);
        }),

        plugin(function({ addComponents, theme }) {
            const components = {
                '.wrapper': {
                    width: '100%',
                    maxWidth: theme('maxWidth.7xl'),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: `calc(env(safe-area-inset-left, 0rem) + ${theme('padding.2')})`,
                    paddingRight: `calc(env(safe-area-inset-right, 0rem) + ${theme('padding.2')})`,
                },
                '@media screen(md)': {
                    '.wrapper': {
                        paddingLeft: `calc(env(safe-area-inset-left, 0rem) + ${theme('padding.4')})`,
                        paddingRight: `calc(env(safe-area-inset-right, 0rem) + ${theme('padding.4')})`,
                    }
                },
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
