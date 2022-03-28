import React, {useEffect, useState} from 'react'
import {Grid} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {IUsers} from "../Types/Interfaces"
import axios from "axios";
import jwt_decode from "jwt-decode";
import Logout from "../Components/Logout";


const Profile = () => {
    const [user, setUser] = useState<IUsers>()

    const token = localStorage.getItem("user") || ""
    const decoded: any = jwt_decode(token)
    const userId = parseInt(decoded.userId)

    const getUser = async () => {
        await axios.get(`http://${globalThis.url}:8080/user/id/${userId}`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                const user = res.data;
                setUser(user)
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getUser();
    },[])

    return(
        <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid
                item
                sx={{
                    marginTop: 6,
                    marginBottom: 1
                }}
            >
                <AccountCircle style={{fontSize: 100}} color="secondary"/>
            </Grid>

            <Grid item>
                First Name: {user?.firstName}
            </Grid>
            <Grid item>
                Last Name: {user?.lastName}
            </Grid>
            <Grid item>
                E-Mail: {user?.emailId}
            </Grid>
            <Grid item
                  sx={{
                      position: "fixed",
                      bottom: 25,
                      textAlign:"center",
                  }}
            >
                <Logout />
            </Grid>
        </Grid>
    )
}

export default Profile