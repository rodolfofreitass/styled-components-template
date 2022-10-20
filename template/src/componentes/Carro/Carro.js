import { Carros, CarrosContainer, CarrosLista, CarrosTitulo, ListaDeCarros, TituloCarros } from "./style";

export function Carro(props) {
    return (
      <CarrosContainer>
        <TituloCarros>Meu carro</TituloCarros>
        <ListaDeCarros>
          <CarrosLista>Cor: {props.cor}</CarrosLista>
          <CarrosLista>Ano: {props.ano}</CarrosLista>
          <CarrosLista>Flex: {props.flex ? "true" : "false"}</CarrosLista>
          <CarrosLista>Adicionado: {props.adicionadoPor}</CarrosLista>
        </ListaDeCarros>
      </CarrosContainer>
    );
  }
  