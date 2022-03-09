import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Stats",
        path: "/stats",
        icon: <IoIcons.IoStatsChart />,
        cName: "nav-text"
    },
    {
        title: "Friends",
        path: "/friends",
        icon: <FaIcons.FaUserFriends />,
        cName: "nav-text"
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <IoIcons.IoPersonCircleOutline />,
        cName: "nav-text"
    }
]