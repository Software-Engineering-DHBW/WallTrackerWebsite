import React, {useEffect, useState} from 'react'
import {IRatings, IUsers} from "../Types/Interfaces";
import {Card, CardContent, Typography} from "@mui/material";
import axios from "axios";

const BoulderCard = (props: IRatings) => {
    const [user, setUser] = useState<IUsers>()

    const getUser = async () => {
        await axios.get(`http://192.168.0.131:8080/user/id/${props.user.userId}`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                if(res.data) {
                    const user = res.data;
                    setUser(user)
                }
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getUser()
    }, [])

    return(
        <Card sx={{
            bgcolor: "secondary.light"
        }}>
            <CardContent sx={{
                marginBottom: -2
            }}>
                <Typography sx={{
                    marginLeft: 2
                }}>
                    User: {user?.firstName}
                </Typography>

                <Typography sx={{
                    marginLeft: 2
                }}>
                    Rating: {props.rating}
                </Typography>

                {props.review &&
                    <Typography
                        sx={{
                            marginLeft: 2
                        }}
                        gutterBottom
                    >
                        Review: {props.review}
                    </Typography>
                }

            </CardContent>
        </Card>
    )
}

export default BoulderCard