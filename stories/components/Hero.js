import { makeHeading } from '../elements/Heading'

export const makeHero = ({
    label = 'something',
    copy
}) => {
    let markup = `
<div class="bg-[#fff]">
    <div class="wrapper py-24 lg:py-32">
      <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
        ${makeHeading({ label })}
        <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">${copy}</p>
      </div>
    </div>
</div>
    `;

    return markup;
};
