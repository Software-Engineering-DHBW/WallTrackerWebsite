import React from 'react'
import {useLocation, Navigate, Outlet} from "react-router-dom";

const RequireAuth = () => {
    const auth = localStorage.getItem("user")
    const location = useLocation()

    return(
        auth
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth