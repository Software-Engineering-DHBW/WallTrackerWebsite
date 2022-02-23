import {Button, List, ListItem, TextField} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const [boulders, setBoulders] = useState([{id: 0, difficulty: 0}]);
    const boulderApiUrl = "http://localhost:8080/boulder";

    const fetchData = async () => {
        const response = await axios.get(boulderApiUrl)
        setBoulders(response.data)
    }

    return (
        <div className="App">
            <h1>Boulders</h1>
            <h2>Fetch a List of all Boulders in the Database</h2>

            {/*Fetch the data*/}
            <div>
                <button className="fetchButton" onClick={fetchData}>
                    Fetch Boulders
                </button>
            </div>

            {/*Display Boulders*/}
            <div className="boulders">
                {boulders[0].id != 0  &&
                    boulders.map((boulder, index) => {
                    const difficulty = boulder.difficulty

                    return (
                        <div className="boulder" key={index}>
                            <h3>Boulder {index + 1}</h3>
                            <h4>Difficulty: {difficulty}</h4>
                        </div>
                    );
                    })
                }
            </div>
        </div>
    );
}

interface IState {
    boulders?: [{id: number, difficulty: number}];
}

interface IProps {

}

class A extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {boulders: [{id: 0, difficulty: 0}]}
    }

    async getBoulders() {
        const response = await fetch("http://localhost:8080/boulder");
        const data = await response.json();
        this.setState({boulders: data})
    }


    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Hallo jonas</h1>
                <h2>Penis</h2>
                <div style={{padding: 16, margin: 16}}>
                    <Button variant={"contained"}
                            onClick={this.getBoulders}>
                        Boulders
                    </Button>
                </div>
                <div>
                    <List>
                        {this.state.boulders!.map(boulder => <ListItem><span>{boulder.id} {boulder.difficulty}</span></ListItem>)}
                    </List>
                </div>
            </div>
        )
    }
}

export default App;
