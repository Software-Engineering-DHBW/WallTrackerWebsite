import { Typography } from '@mui/material';
import React from 'react'
import Charts from "../Components/Charts";
import Container from '@mui/material/Container';


const Stats = () => {
    return(
        <div>

            <Typography align="center">
                <h1>Your Personal Stats</h1>

            </Typography>
            <Charts />

        </div>
    )
}

export default Stats