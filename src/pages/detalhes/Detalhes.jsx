import React,{ useContext } from "react"
import { Context } from "../../CreateContext.jsx/CreateContext"
import { Colors } from "../../util/Colors"
import { Type } from "../../util/Type"
import { CardDetalhes, ContainerDetalhe, ID2, NameCard, Types3, Types4 } from "./style"
import circulo from "../../assets/circuloMedio.png"
import circuloGrande from "../../assets/circuloGrande.png"



export const Detalhes=()=>{
const{detalhes}= useContext(Context)
    // return(
    //     <div>
    
    // <div>
    // <div>{Type(detalhes.types !== undefined && detalhes.types[0].type.name)}</div>
    // <div> <img src={detalhes.sprites !== undefined && detalhes.sprites['front_default']}/> </div>
    // <div><img src={detalhes.sprites !== undefined && detalhes.sprites['back_default']}/>  </div>    
    //  </div>
    //  <div>
    //     <div> </div>
    //     <div></div>
    //  </div>

    //        <h1> {detalhes.name} </h1>
    //     </div>

    
    // )
    return(
      <>

        <ContainerDetalhe>
         <img className="imagemCirculoGrande" src={circulo} /> 


        <CardDetalhes cor={Colors(detalhes.types !== undefined && detalhes.types[0].type.name)}> 
        
          <div>
        <ID2>#{detalhes.id}</ID2>
        <NameCard>{detalhes.name.charAt(0).toUpperCase() + detalhes.name.slice(1)}</NameCard>

        <div><img className="imagemPokemon1" src={detalhes.sprites?.other?.["official-artwork"]?.["front_default"]}/></div>
        <Types3>{Type(detalhes.types !== undefined && detalhes.types[0].type.name)}</Types3>
        <Types4>{Type(detalhes.types !== undefined && detalhes.types[1]?.type.name)}</Types4>
        <img className="imagemCirculo" src={circulo} />
        </div>

        <div><img className="imagemfront" src={detalhes.sprites?.other?.["official-artwork"]?.["front_default"]}/></div>
        <div><img className="imagemback" src={detalhes.sprites !== undefined && detalhes.sprites['back_default']}/>  </div>
        <div>{detalhes.move} </div>
     
      </CardDetalhes>  
      </ContainerDetalhe>
      
      </>
    )
}