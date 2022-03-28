import React from 'react'
import {IBoulder} from "../Types/Interfaces";
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";

const BoulderCard = (props: IBoulder) => {


    return(
        <Card sx={{
            bgcolor: "secondary.light"
        }}>
            <CardContent sx={{
                marginBottom: -3
            }}>
                <CardActionArea>
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
                        Rating: {props.ratingsMean}
                    </Typography>
                </CardActionArea>

                <CardActions>
                    <Button size="small">
                        View Boulder
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default BoulderCard