import { makeHeader } from '../components/Header';
import { makeHero } from "../components/Hero";
import { makeFooter } from '../components/Footer';

export const createHomepage = () => {
    return `
<div>
    ${makeHeader()}
    <section>
    ${makeHero({ label: 'hero', copy: 'something or other' })}
    </section>
    ${makeFooter()}
</div>
    `;
};
