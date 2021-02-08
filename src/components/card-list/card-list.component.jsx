import "./card-list.style.css";

import { Card } from "../card/card.component";

export const CardList = ({ pokemons }) => {
    return (
        <div className="card-list">
            {pokemons.map((pokemon, idx) => {
                return <Card key={idx} pokemon={pokemon}></Card>;
            })}
        </div>
    );
};
