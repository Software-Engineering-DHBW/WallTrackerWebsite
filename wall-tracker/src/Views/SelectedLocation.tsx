import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {IBoulder, ILocations} from "../Types/Interfaces";
import axios from "axios";
import {Card, CardContent, CardHeader, Grid} from "@mui/material";
import BoulderCard from "../Components/BoulderCard";

const SelectedLocation = () => {
    const { id } = useParams()

    const [location, setLocation] = useState<ILocations>()
    const [rating, setRating] = useState(0)
    const [boulders, setBoulders] = useState<IBoulder[]>([])

    const getLocation = async () => {
        await axios.get(`http://${globalThis.url}:8080/location/id/${id}`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                const location = res.data;
                setLocation(location)
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getLocationRating = async () => {
        await axios.get(`http://${globalThis.url}:8080/location/id/${id}/ratingsmean`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
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

    const getLocationBoulders = async () => {
        await axios.get(`http://${globalThis.url}:8080/boulder/location/${id}`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                const boulders = res.data;
                setBoulders(boulders)
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getLocation();
        getLocationRating();
        getLocationBoulders();
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
                                title={location?.locationName}
                                titleTypographyProps={{gutterBottom: true}}
                                subheader={"Rating: " + rating.toLocaleString(undefined, {maximumFractionDigits: 2})}
                            />
                        </CardContent>
                    </Card>
                </Grid>


                {boulders.map((boulder) =>
                    <Grid item xs={12} md={6}>
                        <BoulderCard
                            boulderId={boulder.boulderId}
                            difficulty={boulder.difficulty}
                            routeSetter={boulder.routeSetter}
                            location={boulder.location}
                            ratingsMean={boulder.ratingsMean}
                        />
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default SelectedLocation