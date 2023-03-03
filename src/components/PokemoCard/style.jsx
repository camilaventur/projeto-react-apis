import styled from "styled-components";

export const CardContainer = styled.section`

width: 440px;
  height: 210px;
  border-radius: 12px;
  background: ${(props) => props.cor};
  position: relative;
  display: flex;
  top:100px;
  
  .botaoDetalhes {
    width: 74px;
    height: 24px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;
    background-color: transparent;
    border: none;
    position: absolute;
    left: 10px;
top: 150px;
  }
  .imagemPokemon {
    width: 180px;
    height: 180px;
    position: absolute;
    left: 236px;
top: -49px;
z-index: 99;
  }
  .imagemPokedex {
    width: 250px;
    height: 210.73px;
    position: absolute;
    left: 190px;
top: 0px;
  }
  .botaoCapturar {
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    position: absolute;
    left: 260px;
top: 150px;
  }
`
export const ID = styled.span`

font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  position: absolute;
  color: #ffffff;
  top: 20px;
  left: 20px;

`
export const Name = styled.h2`

font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  top: 10px;
  left: 20px;
  color: #ffffff;
  position: absolute;
`
export const Types = styled.span`

top: 80px;
  left: 20px;
  position: absolute;

`
export const Types2 = styled.span`

top: 80px;
  left: 120px;
  position: absolute;

`