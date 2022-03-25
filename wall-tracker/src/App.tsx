import React from 'react';
import { ThemeProvider, createTheme} from '@mui/material/styles'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Views/Home";
import Stats from "./Views/Stats";
import Profile from "./Views/Profile";
import Friends from "./Views/Friends";
import TempDrawer from "./Components/TempDrawer";
import QRCode from "./Components/QRCode";
import Rating from "./Views/Rating";

const custom_theme = createTheme({
    palette: {
        primary: {
            light: '#63686c',
            main: '#393e41',
            dark: '#13181b',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#9dc1f2',
            main: '#6c91bf',
            dark: '#3c648f',
            contrastText: '#000000',
        },
    },
});


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={custom_theme}>
                <Router>
                    <TempDrawer />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/qr-code" element={<QRCode />} />
                        <Route path="/rating/:id" element={<Rating />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
