import React, {useEffect, useState} from 'react'
import {IBoulder} from "../Types/Interfaces";
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import axios from "axios";

const BoulderCard = (props: IBoulder) => {
    const [rating, setRating] = useState(0)

    const getRating = async () => {
        await axios.get(`http://localhost:8080/boulder/id/${props.boulderId}/ratingsmean`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                if(res.data) {
                    const rating = res.data;
                    setRating(rating)
                }
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getRating()
    }, [])

    return(
        <Card sx={{
            bgcolor: "secondary.light"
        }}>
            <CardContent sx={{
                marginBottom: -3
            }}>
                <CardActionArea
                    component={Link}
                    to={`/location/boulder/${props.boulderId}`}
                >
                    <Typography sx={{
                        marginLeft: 2
                    }}>
                        Id: {props.boulderId}
                    </Typography>

                    <Typography sx={{
                        marginLeft: 2
                    }}>
                        Difficulty: {props.difficulty}
                    </Typography>

                    <Typography
                        sx={{
                            marginLeft: 2
                        }}
                        gutterBottom
                    >
                        {"Rating: " + rating.toLocaleString(undefined, {maximumFractionDigits: 2})}
                    </Typography>
                </CardActionArea>

                <CardActions>
                    <Button
                        size="small"
                        component={Link}
                        to={`/location/boulder/${props.boulderId}`}
                    >
                        View Boulder
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default BoulderCard