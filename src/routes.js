import Main from "./containers/Main";

const routes = [
    {
        path: "/",
        component: Main,
        exact: true
    },
    {
        path: "/conversations",
        component: Main,
        exact: true
    }
];

export default routes;
