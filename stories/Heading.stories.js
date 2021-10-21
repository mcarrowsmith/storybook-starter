import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Heading',
};

export const H1 = () => '<h1 class="text-green-500">Heading 1</h1>'
export const H2 = () => '<h2>Heading 2</h2>'
export const H3 = () => '<h3>Heading 3</h3>'
export const H4 = () => '<h4>Heading 4</h4>'
export const H5 = () => '<h5>Heading 5</h5>'
export const H6 = () => '<h6>Heading 6</h6>'