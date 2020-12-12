import React from "react";

import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";

export const Routes = [
    {
        path: "/",
        name: "home",
        isExact: true,
        component: () => <Home/>
    },
    {
        path: "/series",
        name: "series",
        component: () => <Series/>
    },
    {
        path: "/Movies",
        name: "home",
        component: () => <Movies/>
    },
]