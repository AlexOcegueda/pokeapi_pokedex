import React from "react";

const Card=({pokemon, loading})=>{
    return(
        <>
            {
                loading ? <h1>Loading...</h1>:
                pokemon.map((item)=>{
                    return(
                        <>
                            <div className="card">
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="pokemon" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
            }
            <div className="card">
                <h2>1</h2>
                <img src="./images" alt="pokemon" />
                <h2>Charmander</h2>
            </div>
        </>
    )
}

export default Card