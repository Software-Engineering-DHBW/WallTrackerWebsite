import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {ILocations} from "../Types/Interfaces";
import axios from "axios";

const SelectedLocation = () => {
    const { id } = useParams()

    const [location, setLocation] = useState<ILocations>()
    const [rating, setRating] = useState()

    const getLocation = async () => {
        await axios.get(`http://localhost:8080/location/id/${id}`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
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
        await axios.get(`http://localhost:8080/location/id/${id}/ratingsmean`, {headers:{Authorization: "Bearer " + localStorage.getItem("user") || ""}})
            .then(res => {
                const rating = res.data;
                setRating(rating)
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
    }, [])

    return(
        <div>
            <div>
                This Location is: {location?.locationName}
            </div>
            <div>
                It's mean rating is: {rating}
            </div>
        </div>
    )
}

export default SelectedLocation