/**
 * @typedef     {object} IconGridItem
 * @property    {StaticImageData | string}  [icon]          The icon of the item.
 * @property    {string}                    [title]         The title of the item.
 * @property    {string}                    [description]   The description of the item.
 * @property    {string}                    [link]          The link associated with the item.
 * @property    {string}                    [linkTitle]     The title of the link.
 */

import icon from "../img/icon/icon-expertise.svg";

// @todo - Sanity
const expertiseItems = [
    {
        icon: icon,
        title: 'Insight rich',
        description: 'We support a wide range of analytical and insight gathering activities, designed to understand audience behaviour and to help inform our strategic recommendations.',
        link: '#',
        linkTitle: 'Learn more'
    },
    {
        icon: icon,
        title: 'Structured foundations',
        description: 'Once the problem has been defined, we validate the proposed solutions in the form of user journeys, IA, wireframing and prototyping.',
    },
    {
        icon: icon,
        title: 'Design thinking',
        description: 'We combine audience insights with our strategic expertise to fuel intensive periods of conceptual thinking, creating solutions that keep your brand moving forward.',
    },
    {
        title: 'Strategic execution',
        description: 'Our strategic solutions unlock opportunities and solve business problems. We create the best possible experience and the right conditions to deliver.',
    },
]

export default expertiseItems;