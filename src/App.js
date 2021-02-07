import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
    state = {
        pokemons: [
            {
                name: "Pikachu",
            },
            {
                name: "Pichu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
            {
                name: "Pikachu",
            },
        ],
    };

    render() {
        return (
            <div className="App">
                <CardList pokemons={this.state.pokemons}></CardList>
            </div>
        );
    }
}

export default App;
