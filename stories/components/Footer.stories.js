const html = require('./Footer.html');

export default {
    title: 'Components/Footer',
};

export const Footer = () => html;
Footer.parameters = {
    docs: {
        source: {
            code: html,
            language: "html",
            type: "auto",
        },
    }
};
