import styled from "styled-components";

export const CarrosContainer = styled.div`
    font-family: verdana;
    border: 2px solid black;
    padding: 10px;
    box-shadow: 5px 1px 10px black;
    margin: 10px;
    background: orange;
`;

export const CarrosLista = styled.li`
    list-style-type: none;
`;

export const ListaDeCarros = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style-type: none;
`
export const TituloCarros = styled.h2`
    text-align: center;


`