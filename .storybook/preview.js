import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import "../resources/css/app.css"

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const config = resolveConfig(tailwindConfig);
const tailwindBreakpoints = Object.assign({},
    ...Object.entries(config.theme.screens)
        .map(breakpoint => {
            return {
                [`tailwind${breakpoint[0].toLowerCase()}`]: {
                    name: `Tailwind ${breakpoint[0].toUpperCase()}`,
                    styles: {
                        width: breakpoint[1],
                        height: '100%'
                    },
                    type: 'other'
                }
            };
        })
    );

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            ...tailwindBreakpoints,
            ...INITIAL_VIEWPORTS
        }
    }
};
