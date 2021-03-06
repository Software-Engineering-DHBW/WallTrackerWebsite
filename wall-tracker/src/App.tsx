import React from 'react';
import { ThemeProvider, createTheme} from '@mui/material/styles'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Stats from "./Views/Stats";
import Profile from "./Views/Profile";
import Friends from "./Views/Friends";
import TempDrawer from "./Components/TempDrawer";
import QRCode from "./Components/QRCode";
import Rating from "./Views/Rating";
import Register from "./Views/Register";
import Location from "./Views/Location"
import SelectedLocation from "./Views/SelectedLocation";
import LogIn from "./Components/LogIn";
import BoulderOfLocation from "./Views/BoulderOfLocation";
import RequireAuth from "./Components/RequireAuth";

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

//Globale Variable für alle Axios Requests
globalThis.url = "192.168.0.131"

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={custom_theme}>
                <Router>
                    <TempDrawer />

                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<LogIn />} />

                        <Route element={<RequireAuth />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/stats" element={<Stats />} />
                            <Route path="/profile" element={<Profile />} />
                            {/*<Route path="/friends" element={<Friends />} />*/}
                            <Route path="/qr-code" element={<QRCode />} />
                            <Route path="/rating/:id" element={<Rating />} />
                            <Route path="/location" element={<Location />} />
                            <Route path="/location/selected/:id" element={<SelectedLocation />} />
                            <Route path="/location/boulder/:id" element={<BoulderOfLocation />} />
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
