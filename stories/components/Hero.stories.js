import { makeHero } from "./Hero";

export default {
    title: 'Components/Hero',
    argTypes: {
        label: { control: 'text' },
        copy: { control: 'text' }
    }
};

export const Hero = ({ label, ...args }) => {
    return makeHero({ label, ...args });
};
Hero.args = {
    label: 'Creating digital capabilities',
    copy: 'A boat load of text'
};
