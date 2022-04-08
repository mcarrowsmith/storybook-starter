export const makeHeading = ({
    type = 'h1',
    label
}) => {
    const heading = document.createElement(type);
    heading.innerText = label;

    return heading;
};