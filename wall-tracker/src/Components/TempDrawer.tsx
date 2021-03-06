import React, {useState} from 'react';
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {SidebarData} from "./SidebarData";
import {Link} from 'react-router-dom';
import {AppBar, IconButton, Toolbar, Typography, Drawer, ListItemButton} from "@mui/material";
import {Menu, Close, LogoutOutlined} from "@mui/icons-material";
import Logout from "./Logout";

function TempDrawer() {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }


    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            variant="h5"
                            sx={{marginLeft: 2}}
                        >
                            Wall Tracker
                        </Typography>
                        <Drawer
                            onClose={toggleDrawer}
                            open={showDrawer}
                            >
                            <Box
                                sx={{width: 250}}
                                role="presentation"
                                onClick={toggleDrawer}
                            >
                                <List>
                                    <ListItem button>
                                        <ListItemIcon
                                            color="inherit"
                                        >
                                            <Close />
                                        </ListItemIcon>
                                    </ListItem>
                                    {SidebarData.map((item, index) => (
                                        <ListItem button key={index} component={Link} to={item.path}>
                                            <ListItemIcon
                                                color="inherit"
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                color="inherit"
                                                primary={item.title}
                                            />
                                        </ListItem>
                                    ))}
                                    <ListItemButton
                                        sx={{
                                            position: "fixed",
                                            bottom: 15,
                                            textAlign:"center",
                                            mx: "auto"
                                        }}
                                    >
                                        <ListItemIcon
                                            color="inherit"
                                        >
                                            <LogoutOutlined />
                                        </ListItemIcon>
                                        <Logout />
                                    </ListItemButton>
                                </List>
                            </Box>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default TempDrawer;