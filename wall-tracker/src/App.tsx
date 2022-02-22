import {Button, List, ListItem, TextField} from '@material-ui/core'
import React from 'react'

function App() {
    let [text, changeText] = React.useState("");
  return (
    <div>
      <A></A>
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

    componentDidMount() {
        fetch("http://localhost:8080/boulder")
            .then(response => response.json())
            .then(val => this.setState({boulders: val}))
            .catch(() => {})
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Hallo jonas</h1>
                <h2>Penis</h2>
                <div>
                    <List>
                        {this.state.boulders!.map(boulder => <ListItem><span>{boulder.id} {boulder.difficulty}</span></ListItem>)}
                    </List>
                </div>
                <div style={{padding: 16, margin: 16}}>
                    <Button variant={"contained"} onClick={() => {

                    }}>Boulders</Button>
                </div>
            </div>
        )
    }
}

export default A;
