import ReactInfo from "./components/React";
import Entwicklung from "./components/Entwicklung";
import Arbeiten from "./components/Arbeiten";
import Components from "./components/Components";
import Tools from "./components/Tools";

export default [
    {
        path: "/",
        component: ReactInfo,
        exact: true,
    },
    {
        path: "/entwicklung",
        component: Entwicklung,
        exact: true,
    },
    {
        path: "/arbeiten",
        component: Arbeiten,
        exact: true,
    },
    {
        path: "/components",
        component: Components,
        exact: true,
    },
    {
        path: "/tools",
        component: Tools,
        exact: true,
    },
];
