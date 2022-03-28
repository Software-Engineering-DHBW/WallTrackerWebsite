import React, {useEffect, useState} from 'react'
import axios from "axios";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ILocations} from "../Types/Interfaces";
import {Button} from "@mui/material";

const Location = () => {
    const [locations, setLocations] = useState<ILocations[]>([])
    const token = localStorage.getItem("user") || ""

    const getLocations = async () => {
        await axios.get(`http://${globalThis.url}:8080/location`, {headers: {Authorization:`Bearer ${token}`}})
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
                <ListItem
                    key={index}
                    divider={true}
                >
                   <Button
                       component={Link}
                       to={`/location/selected/${location.locationId}`}
                       variant={"contained"}
                       fullWidth={true}
                       sx={{
                           bgcolor: "secondary.main",
                           textAlign: "center"
                       }}
                   >
                        <ListItemText
                            color="inherit"
                            primary={location.locationName}
                        />
                   </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default Location