import { makeHeader } from '../components/Header';
import { makeHero } from "../components/Hero";
import { makePartners } from "../components/Partners";
import { makeFooter } from '../components/Footer';

export const createHomepage = ({
    heroLabel = 'We build sustainable digital products',
   partnerQuantity = 8
}) => {
    return `
<div>
    <div class="breakpoint"></div>
    ${makeHeader()}
    <section>
    ${makeHero({ label: heroLabel, copy: 'something or other' })}
    ${makePartners({quantity: partnerQuantity})}
    </section>
    ${makeFooter()}
</div>
    `;
};
