import React,{ useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CardContainer, ID, Name, Types, Types2 } from "./style"
import axios from "axios";
import { Type } from "../../util/Type";
import { Colors } from "../../util/Colors";
import pokedex from "../../assets/circulo.png"
import { Context } from "../../CreateContext.jsx/CreateContext";

export const PokemonCard = ({pokemon}) => {

    const{ adicionarPokemon, pokemons, setDetalhes}=useContext(Context)
  console.log(pokemons)
  const[ pokemon2, setPokemon2]=useState([])
    const reqPokemon= axios.create({
      baseURL:`${pokemon.url}`
    })
    const req2Pokemon= async()=>{
      const resposta2 = await reqPokemon.get()
      const dados2= await resposta2.data
      setPokemon2(dados2)
    }
    useEffect(()=>{
  req2Pokemon()
    },[])
  const Id=pokemon2.id >=10? pokemon2.id: `0${pokemon2.id}`
    
    return (
    <CardContainer cor={Colors(pokemon2.types !== undefined && pokemon2.types[0].type.name)}> 
    
    
      <ID>#{Id}</ID>
      
      <Name>{pokemon2.name}</Name>
      <Types>{Type(pokemon2.types !== undefined && pokemon2.types[0].type.name)}</Types>
      <Types2>{Type(pokemon2.types !== undefined && pokemon2.types[1]?.type.name)}</Types2>
      <Link to={ `/detalhes/${pokemon2.name}`}>
      <button  className="botaoDetalhes" onClick={()=>setDetalhes(pokemon2)}> Detalhes</button>
      </Link>
      
      <img className="imagemPokemon" src={pokemon2.sprites?.other?.["official-artwork"]?.["front_default"]}/>
      <img className="imagemPokedex"src={pokedex} />
      <button className="botaoCapturar" onClick={()=> adicionarPokemon(pokemon2)} > Capturar</button>
    </CardContainer>
    
    )
      
  }
  
  
  