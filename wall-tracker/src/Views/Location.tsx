import React, {useEffect, useState} from 'react'
import axios from "axios";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ILocations} from "../Types/Interfaces";

const Location = () => {
    const [locations, setLocations] = useState<ILocations[]>([])

    const getLocations = async () => {
        await axios.get("http://localhost:8080/location")
            .then(res => {
                const locations = res.data;
                setLocations(locations)
            }).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    useEffect(() => {
        getLocations();
    }, [])


    return(
        <List>
            {locations.map((location, index) => (
                <ListItem button key={index} component={Link} to={`/location/selected/${location.locationId}`}>
                    <ListItemText
                        color="inherit"
                        primary={location.locationName}
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default Location