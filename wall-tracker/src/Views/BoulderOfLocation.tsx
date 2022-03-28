import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {IBoulder, IRatings} from "../Types/Interfaces";
import axios from "axios";
import {Card, CardContent, CardHeader, Grid} from "@mui/material";
import RatingCard from "../Components/RatingCard";

const BoulderOfLocation = () => {
    const { id } = useParams()

    const [boulder, setBoulder] = useState<IBoulder>()
    const [ratings, setRatings] = useState<IRatings[]>([])
    const [rating, setRating] = useState(0)

    const getRating = async () => {
        await axios.get(`http://${globalThis.url}:8080/boulder/id/${id}/ratingsmean`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
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

    const getBoulder = async () => {
        await axios.get(`http://${globalThis.url}:8080/boulder/id/${id}`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                if(res.data) {
                    const boulder = res.data;
                    setBoulder(boulder)
                }
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getRatings = async () => {
        await axios.get(`http://${globalThis.url}:8080/rating/boulder/${id}`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                if(res.data) {
                    const ratings = res.data;
                    setRatings(ratings)
                }
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getBoulder();
        getRatings();
        getRating()
    }, [])

    return(
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <Card raised={true} sx={{bgcolor: "secondary.main"}}>
                        <CardContent sx={{
                            marginBottom: -3,
                            marginTop: -1
                        }}>
                            <CardHeader
                                title={boulder?.boulderId}
                                titleTypographyProps={{gutterBottom: true}}
                                subheader={"Rating: " + (rating .toLocaleString(undefined, {maximumFractionDigits: 2}))}
                            />
                        </CardContent>
                    </Card>
                </Grid>


                {ratings.map((rating) =>
                    <Grid item xs={12} md={6}>
                        <RatingCard
                            ratingsId={rating.ratingsId}
                            rating={rating.rating}
                            review={rating.review}
                            boulder={rating.boulder}
                            user={rating.user}
                        />
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default BoulderOfLocation