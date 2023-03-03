import React, { useReducer, useState } from "react";
import { Context } from "../CreateContext.jsx/CreateContext";




const inicialState = { 
    pokemons:[]
}

const pokedexFunction =(state, action)=>{
if(action.type==="add"){
    const indexPokemonExistente=state.pokemons.findIndex(pokemon=>pokemon.id === action.pokemon.id);

    const pokemonExistent= state.pokemons[indexPokemonExistente]
    let updatePokemons
    
    updatePokemons = pokemonExistent? state.pokemons: state.pokemons.concat(action.pokemon)
    const updatePokemons1= state.pokemons.concat(action.pokemon)
       
    return{
        pokemons:updatePokemons1
       };
    }else if(action.type ==="remove"){
        const removerPokemon=state.pokemons.filter(pokemon =>pokemon.id !== action.pokemon.id)
        return{
            pokemons:removerPokemon
        }
    }
    return inicialState
}





export const ContextProvider=({children})=>{
const [detalhes, setDetalhes]= useState([])
const [ pokemonState, dispatch]=useReducer(pokedexFunction, inicialState)

const adicionarPokemon= (pokemon)=>{
    dispatch({type:"add", pokemon:pokemon})
}
const removePokemon= (pokemon)=>{
    dispatch({type:"remove", pokemon:pokemon})
}

const context={ 
    pokemons:pokemonState.pokemons,
    adicionarPokemon: adicionarPokemon,
    removePokemon: removePokemon,
    detalhes:detalhes,
    setDetalhes:setDetalhes
} 

    return(
        <Context.Provider    value={context}     >
{children}
        </Context.Provider>
    )
}; 