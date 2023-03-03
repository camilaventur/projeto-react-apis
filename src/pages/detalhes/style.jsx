import styled from "styled-components";

export const ContainerDetalhe = styled.main`

display: flex;
flex-wrap: wrap;
gap: 22px;
height: 300vh;
background-color: #5E5E5E;
justify-content: center;
.imagemCirculoGrande {
    width: 1200px;
    height: 1000px;
    position: absolute;
    left: 180px;
top: 200px;
}



`  

export const CardDetalhes=styled.div`
 width:1320px;
  height: 630px;
  border-radius: 48px;
  background: ${(props) => props.cor};
  position: relative;
  display: flex;  
  top:250px;
  .imagemCirculo {
    width: 730px;
    height: 630.73px;
    position: absolute;
    left: 570px;
top: 5px;
}
.imagemPokemon1{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 1000px;
top: -120px;
z-index: 297;

  }

  .imagemfront{
    width: 180px;
    height: 180px;
    position: absolute;
    left: 60px;
top: 45px;
z-index: 99;
background-color: white;
  }
  .imagemback{
    width: 180px;
    height: 180px;
    position: absolute;
    left: 60px;
top: 290px;
z-index: 99;
background-color: white;





  }
`

export const NameCard = styled.h2`

font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 39px;
  top: 10px;
  left: 700px;
  color: #ffffff;
  position: absolute;
`
export const Types3 = styled.span`

top: 80px;
  left: 720px;
  position: absolute;

`
export const Types4 = styled.span`

top: 80px;
  left: 820px;
  position: absolute;

`
export const ID2 = styled.span`

font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  position: absolute;
  color: #ffffff;
  top: 20px;
  left: 700px;`    

