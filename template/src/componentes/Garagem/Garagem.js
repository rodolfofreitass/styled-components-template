import { Carro } from "../Carro/Carro";
import { Botao, Estacionamento, GaragemContainer } from "./style";
import { CarroColorido } from "../Carro/style";

export function Garagem(props) {
  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>

      <Estacionamento>
        <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
        <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
        <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} />
        <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} />
      </Estacionamento>
    </GaragemContainer>
  );
}
