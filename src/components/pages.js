import Themes from './Themes'
import Components from './Components'
import Arbeiten from './Arbeiten'
import Entwicklung from './Entwicklung'

const pages = {
    pages: [
        {
            component: Themes,
            name: "Themes",
            path: "/Themes"
        },
        {
            component: Components,
            name: "Components",
            path: "/Components"
        },
        {
            component: Arbeiten,
            name: "Arbeiten",
            path: "/Arbeiten"
        },
        {
            component: Entwicklung,
            name: "Entwicklung",
            path: "/Entwicklung"
        }
    ],
};

export default pages;