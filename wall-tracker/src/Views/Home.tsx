import React from 'react'
import {Button, Grid, IconButton, Typography} from "@mui/material";
import {AccountCircle, QrCode} from "@mui/icons-material";
import {Link} from "react-router-dom";


const TopContent = () => {
    return(
        <>
            <IconButton color="secondary" component={Link} to="/profile">
                <AccountCircle style={{fontSize: 100}}/>
            </IconButton>
            <Typography marginTop={1}>
                <Button component={Link} to="/profile">
                    View your Profile
                </Button>
            </Typography>
        </>
    )
}

const BottomContent = () => {
    return(
        <>
            <IconButton color="secondary" component={Link} to="/qr-code">
                <QrCode style={{fontSize: 100}}/>
            </IconButton>
            <Typography marginTop={1}>
                <Button component={Link} to="/qr-code">
                    Click to scan QR-Code
                </Button>
            </Typography>
        </>
    )
}

const Home = () => {
    return(
        <>
            <Grid
                container
                direction="column"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{
                    minHeight: "100vh"
                }}
            >
                <Grid
                    container
                    item
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    style={{
                        minHeight: "50vh",
                        textAlign: "center"
                    }}
                >
                    <Grid item xs={0} md={2} />
                    <Grid item xs={12} md={8}>
                        <TopContent />
                    </Grid>
                    <Grid item xs={0} md={2} />
                </Grid>
                <Grid
                    container
                    item
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    style={{
                        minHeight: "50vh",
                        textAlign: "center"
                    }}
                >
                    <Grid item xs={0} md={2} />
                    <Grid item xs={12} md={8}>
                        <BottomContent />
                    </Grid>
                    <Grid item xs={0} md={2} />

                </Grid>
            </Grid>
        </>
    )
}

export default Home