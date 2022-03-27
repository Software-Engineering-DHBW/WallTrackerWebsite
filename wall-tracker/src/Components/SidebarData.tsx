import React from 'react';
import {BarChart, People, Person, Home, LocationOn} from "@mui/icons-material/";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <Home />,
        cName: "navText"
    },
    {
        title: "Stats",
        path: "/stats",
        icon: <BarChart />,
        cName: "navText"
    },
    {
        title: "Friends",
        path: "/friends",
        icon: <People />,
        cName: "navText"
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <Person />,
        cName: "navText"
    },
    {
        title: "Location",
        path: "/location",
        icon: <LocationOn />
    }
]