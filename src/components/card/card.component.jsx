import React, { Component } from "react";
import "./card.style.css";
import PokeballLogo from "../../img/pokeball-pokemon-svgrepo-com.svg";
export class Card extends Component {
    constructor({ pokemon }) {
        super();
        this.state = {
            pokemon: {},
            isFetch: false,
            error: false,
        };
    }

    componentDidMount() {
        fetch(this.props.pokemon.url)
            .then((res) => res.json())
            .then((data) => this.setState({ pokemon: data, isFetch: true }))
            .catch((err) => console.error(err), this.setState({ error: true }));
    }

    renderPokemonCard = () => {
        let styleClass = `card ${this.state.pokemon.types[0].type.name}`;
        return (
            <div className={styleClass}>
                <div className="pokemon">
                    <img
                        src={
                            this.state.pokemon.sprites.other["official-artwork"]
                                .front_default
                        }
                        alt={this.props.pokemon.name}
                    ></img>
                </div>
                <span className="number">
                    #{this.state.pokemon.id.toString().padStart(3, "0")}
                </span>
                <h1> {this.props.pokemon.name.toUpperCase()} </h1>
            </div>
        );
    };

    renderWaintingCard = () => {
        return (
            <div className="card">
                <img
                    className="waiting-pokeball"
                    src={PokeballLogo}
                    alt={this.props.pokemon.name}
                ></img>
                <h1> {this.props.pokemon.name.toUpperCase()} </h1>
            </div>
        );
    };

    renderErrorCard = () => {
        return (
            <div className="card">
                <h1> An error occurred... </h1>
                <h1> {this.props.pokemon.name.toUpperCase()} </h1>
            </div>
        );
    };

    render() {
        if (this.state.isFetch === true) {
            return this.renderPokemonCard();
        } else {
            return this.renderWaintingCard();
        }
    }
}
