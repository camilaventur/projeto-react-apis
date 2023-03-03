import { useEffect, useState } from "react"
import { PokemonCard } from "../../components/PokemoCard/PokemonCard"
import axios from "axios"
import { ContainerHome } from "./style"


export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const reqApi = axios.create({
       baseURL: "https://pokeapi.co/api/v2/pokemon"
    })
    const pokemonReq = async () => {
       const resposta = await reqApi.get()
       const dados = await resposta.data.results
       setPokemons(dados)
 
    }
    useEffect(() => {
       pokemonReq()
    }, [])
 
 
 
    return (
       <ContainerHome>
       <h1> Meus documentos</h1>
          {pokemons.map((pokemon) => {
             return <PokemonCard pokemon={pokemon} />
          }
          )}
       </ContainerHome>
    )
 }