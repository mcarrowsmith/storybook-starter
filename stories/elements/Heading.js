export const makeHeading = ({
    type = 'h1',
    style = 'heading-1',
    label
}) => {
    const heading = document.createElement(type);
    heading.innerText = label;

    heading.classList.add(style);

    return heading.outerHTML;
};