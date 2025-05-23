// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JSX } from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage.tsx";
import App from "./App.tsx";

const publicRoutes = [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/app',
        component: App
    },
]

const Routing = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, component: Component}) => (
                <Route path={path} element={<Component/>} />
            ))}
        </Routes>
    );
};

export default Routing;