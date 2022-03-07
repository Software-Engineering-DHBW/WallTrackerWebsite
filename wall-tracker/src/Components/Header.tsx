import React from "react";
import {AppBar, Toolbar, Typography} from '@mui/material';
import {Box, Button} from "@mui/material";
import Navigation from "./Navigation"

function Header(){
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Wall-Tracker
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Navigation />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;