import React from 'react'
import {Box, Button, Grid, Rating as RatingBox, TextField, Typography} from "@mui/material";
import {Star} from "@mui/icons-material";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode"

const labels: { [index: string]: string } = {
    1: 'Shit',
    2: 'Meh',
    3: 'Ok',
    4: 'Nice',
    5: 'Schallert'
};

const Rating = () => {
    const { id } = useParams()
    const [value, setValue] = React.useState<number | null>(3);
    const [hover, setHover] = React.useState(-1);
    const [comment, setComment] = React.useState('Kommentar');
    const token = localStorage.getItem("user") || ""
    const decoded: any = jwt_decode(token)
    const userId = parseInt(decoded.userId)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };

    const postRating = () => {
        axios.post(`http://${globalThis.url}:8080/rating`, {
            "rating": value,
            "review": comment,
            "boulder":{
                "boulderId": id
            },
            "user": {
                "userId": userId
            }
        },
            {headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }}
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    return(
        <Grid
            container
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{
                minHeight: "75vh"
            }}
        >
            <Grid
                container
                item
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{
                    textAlign: "center"
                }}
            >
                <Grid item xs={0} md={2} />

                <Grid
                    item container
                    xs={12} md={8}
                    spacing={2}
                >

                    <Grid item xs={12}>
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom={true}>
                            <RatingBox
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                size="large"
                            />
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            gutterBottom={true}
                            sx={{padding: 4}}
                        >
                            <TextField
                                label="Kommentar"
                                multiline
                                placeholder={comment}
                                onChange={handleChange}
                                maxRows={4}
                            />
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={postRating}
                            component={Link} to="/"
                        >
                            Rate
                        </Button>
                    </Grid>

                </Grid>

                <Grid item xs={0} md={2} />
            </Grid>
        </Grid>
    )
}

export default Rating