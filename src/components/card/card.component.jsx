import "./card.style.css";

export const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
                alt="pokemon"
            ></img>
            <h1> {pokemon.name} </h1>
        </div>
    );
};
