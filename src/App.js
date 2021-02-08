import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

import { Config } from "./config";

class App extends React.Component {
    state = {
        pokemons: [],
    };

    componentDidMount() {
        fetch(`${Config.baseApi}pokemon?limit=100`)
            .then((res) => res.json())
            .then((data) => this.setState({ pokemons: data.results }))
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="App">
                <CardList pokemons={this.state.pokemons}></CardList>
            </div>
        );
    }
}

export default App;
