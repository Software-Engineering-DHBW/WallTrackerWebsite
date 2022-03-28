import React from 'react'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user")
        navigate("/login")
    }

    return(
        <Button
            onClick={logout}

        >
            Logout
        </Button>
    )
}

export default Logout