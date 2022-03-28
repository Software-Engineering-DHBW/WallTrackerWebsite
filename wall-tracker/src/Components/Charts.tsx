import React, { useEffect, useState} from 'react';
import {Paper, Typography} from "@mui/material";
import useAxios from "../Hooks/useAxios.hook";
import {CartesianGrid, Legend, Line, BarChart,Bar, Tooltip, XAxis, YAxis, ResponsiveContainer} from 'recharts';

function Charts() {
    // const [data1, setData] = useState();
    // let url = "progress";
    // const [ response, isLoading, isError ] = useAxios(url);

    // const [data2, setData] = useState();
    // let url = "boulder";
    // const [ response, isLoading, isError ] = useAxios(url);

    // const [data3, setData] = useState();
    // let url = "ratings";
    // const [ response, isLoading, isError ] = useAxios(url);

    //     useEffect(() => {
    //     setData(response)
    //
    // }, [url]);

    const testdata = [
        {
            "Boulder": "01",
            "pv": 2
        },
        {
            "Boulder": "02",
            "pv": 8
        },
        {
            "Boulder": "03",
            "pv": 9
        },
        {
            "Boulder": "04",
            "pv": 3
        },
        {
            "Boulder": "05",
            "pv": 4
        },
        {
            "Boulder": "06",
            "pv": 8
        },
        {
            "Boulder": "07",
            "pv": 3
        }
    ]


    return(

        <Paper>
            <Typography align="center">
                <h2>Completed Bolder</h2>

            </Typography>
            <ResponsiveContainer width='100%' height={400}>
                <BarChart width={700} height={250} data={testdata} margin={{ top: 20, right: 50, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Boulder" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" name="Completed"/>
                </BarChart>
            </ResponsiveContainer>

            <Typography align="center">
                <h2>Difficulty of the Bolder</h2>

            </Typography>
            <ResponsiveContainer width='100%' height={400}>
                <BarChart width={700} height={250} data={testdata} margin={{ top: 20, right: 50, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Boulder" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" name="Difficulty"/>
                </BarChart>
            </ResponsiveContainer>

            <Typography align="center">
                <h2>Rating of the Bolder</h2>

            </Typography>
            <ResponsiveContainer width='100%' height={400}>
                <BarChart width={700} height={250} data={testdata} margin={{ top: 20, right: 50, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Boulder" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" name="Rating of the Bolder" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    )
}

export default Charts