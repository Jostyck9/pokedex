import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

import { Config } from "./config";

class App extends React.Component {
    state = {
        pokemons: [],
        offset: 0,
    };

    componentDidMount() {
        this.updatePokemonList();
    }

    increaseList = () => {
        this.setState(
            (oldState) => ({
                offset: oldState.offset + 100,
            }),
            () => this.updatePokemonList()
        );
    };

    updatePokemonList = () => {
        fetch(`${Config.baseApi}pokemon?limit=100&offset=${this.state.offset}`)
            .then((res) => res.json())
            .then((data) =>
                this.setState((oldState) => ({
                    pokemons: oldState.pokemons.concat(data.results),
                }))
            )
            .catch((err) => console.error(err));
    };

    render() {
        return (
            <div className="App">
                <CardList pokemons={this.state.pokemons}></CardList>
                <button onClick={this.increaseList}>Load</button>
            </div>
        );
    }
}

export default App;
