import React, { useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import useAxios from "../Hooks/useAxios.hook";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

function Charts() {
    const [data, setData] = useState();
    let url = "boulder";
    const [ response, isLoading, isError ] = useAxios(url);

    useEffect(() => {
        setData(response)

    }, [url]);

    return(
        <Paper>
            <LineChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" type="number"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="difficulty" stroke="#8884d8" />
            </LineChart>
        </Paper>
    )
}

export default Charts