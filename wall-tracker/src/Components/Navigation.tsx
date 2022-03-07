import React, {useState} from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {Home, Logout, People, QueryStats} from "@mui/icons-material";
import {Link} from "react-router-dom";

function Navigation(){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <React.Fragment>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem component={Link} to={'/'}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        Home
                </MenuItem>
                <MenuItem component={Link} to={'/stats'}>
                        <ListItemIcon>
                            <QueryStats />
                        </ListItemIcon>
                        Stats
                </MenuItem>
                <MenuItem component={Link} to={'/friends'}>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        Friends
                </MenuItem>
                <Divider />
                <MenuItem component={Link} to={'/profile'}>
                        <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>

    )
}

export default Navigation