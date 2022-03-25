import React from 'react'
import {Box, Grid, Rating as RatingBox} from "@mui/material";
import {Star} from "@mui/icons-material";

const labels: { [index: string]: string } = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent'
};

const TopContent = () => {
    const [value, setValue] = React.useState<number | null>(3);
    const [hover, setHover] = React.useState(-1);

    return(
        <>
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
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
        </>
    )
}

const MiddleContent = () => {
    return(
        <>

        </>
    )
}

const BottomContent = () => {
    return(
        <>

        </>
    )
}


const Rating = () => {
    return(
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
            {/* Top content on page */}
            <Grid
                container
                item
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{
                    minHeight: "33vh",
                    textAlign: "center"
                }}
            >
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={8}>
                    <TopContent />
                </Grid>
                <Grid item xs={0} md={2} />
            </Grid>

            {/* middle content on page */}
            <Grid
                container
                item
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{
                    minHeight: "33vh",
                    textAlign: "center"
                }}
            >
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={8}>
                    <MiddleContent />
                </Grid>
                <Grid item xs={0} md={2} />

            </Grid>

            {/* bottom content on page */}
            <Grid
                container
                item
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{
                    minHeight: "33vh",
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
    )
}

export default Rating