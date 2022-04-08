import { createHomepage } from './Homepage';

export default {
    title: 'Pages/Homepage',
    argTypes: {
        heroLabel: {control: 'text'},
        partnerQuantity: { control: 'text'}
    }
};

export const Homepage = ({
    heroLabel,
    partnerQuantity
}) => createHomepage({ heroLabel, partnerQuantity });

