import React from 'react'
import {Avatar, Box, IconButton} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const Home = () => {
    return(
        <div style={{ display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh"
        }}
        >
            <Box
                sx={{
                    height:"50%"
                }}>
                <IconButton>
                    <Avatar
                        variant="circular"
                        sx={{
                            fontSize: "80px",
                            width: "auto",
                            height: "auto"
                        }}
                    >
                        <AddAPhotoIcon style={Object.assign({color: 'grey' })} fontSize='inherit' />
                    </Avatar>

                </IconButton>
            </Box>
        </div>
    )
}

export default Home