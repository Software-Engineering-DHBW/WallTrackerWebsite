import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {QrReader} from "react-qr-reader";
import {Link} from "react-router-dom";

function QRCode() {
    const [scanResult, setScanResult] = useState<string | null>();
    const [link, setLink] = useState("");
    const [info, setInfo] = useState("");

    const handleScan = (result: any, error: any) => {
        if (!!error){
            console.info(error);
        }
        if (!!result){
            setScanResult(result?.text);
        }
    }

    useEffect(() => {
        if(Number(scanResult)) {
            setLink(`/boulder/${scanResult}`)
            setInfo("QR-Code scanned");
        }
        else if(!scanResult) {}
        else{
            setInfo("Invalid QR-Code");
        }
    })

    return(
        <>
            <Grid container
                  alignItems="center"
                  justifyContent="center"
            >
                <Grid item md={3}>
                </Grid>
                <Grid item
                      xs={12} md={6}
                      sx={{
                          textAlign: "center"
                      }}
                >
                    <Box >
                    <QrReader
                        constraints={{facingMode: 'user'}}
                        onResult={handleScan}
                        scanDelay={300}
                        containerStyle={{width: '100%'}}
                        videoContainerStyle={{width: '100%'}}
                        videoStyle={{width: '100%'}}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: 7
                        }}
                    >
                        {info}
                    </Typography>
                    <Button
                        component={Link} to={link}
                        variant="contained"
                        size="large"
                        sx={{
                            marginBottom: 7
                        }}
                    >
                        Rate Boulder
                    </Button>
                    </Box>
                </Grid>
                <Grid item md={3}>
                </Grid>
            </Grid>
        </>
    )
}

export default QRCode