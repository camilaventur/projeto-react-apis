import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../CreateContext.jsx/CreateContext";
import { Colors } from "../util/Colors";
import { Type } from "../util/Type";
import { ContainerPokedex, ID, Name, PokedexCard, Types, Types2 } from "./style";



export const Pokedex=()=>{

    const {pokemons,removePokemon}=useContext(Context)
   
// return(
//     <PokedexCard cor={Colors(pokemon.types !== undefined && pokemon.types[0].type.name)}  >
//         {pokemons.map((pokemon)=>{
//            console.log(pokemons)  
//            return (
//            <>
           
//            <h1>({pokemon.name})</h1>
//            <div>{Type(pokemon.types !== undefined && pokemon.types[0].type.name)}</div> 
//            <button onClick={()=>removePokemon(pokemon)}>Remover</button>
//            </>
//            )
//         })}
    
//     </PokedexCard>
// )

//       }
return (
    <div>
      <ContainerPokedex>
     
      {pokemons.map((pokemon) => (
        <PokedexCard cor={Colors(pokemon.types !== undefined && pokemon.types[0].type.name)}>
      
          <ID>#{pokemon.id}</ID>
      
      <Name>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Name>
      <Types>{Type(pokemon.types !== undefined && pokemon.types[0].type.name)}</Types>
      <Types2>{Type(pokemon.types !== undefined && pokemon.types[1]?.type.name)}</Types2>
      
      <img className="imagemPokemon" src={pokemon.sprites?.other?.["official-artwork"]?.["front_default"]}/>
  
          <button className="removerpokemon" onClick={() => removePokemon(pokemon)}>Remover</button>
        </PokedexCard>
      ))}

</ContainerPokedex>
    </div>
  );
}

