import React from "react"; 
import logo from "../../assets/logo.png"
import { ContainerHeader } from "./style";
import { Link } from "react-router-dom"




export const Header = () => {
    return (
      <ContainerHeader>
          <img src={logo}/>
          <Link to={"/pokedex"}> 
     Pokedex
          </Link>
      </ContainerHeader>
    )
  }
  