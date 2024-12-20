import { ReactElement } from "react";
import "./Botao.css";

interface BotaoProps {
  children: ReactElement | string;
  onClick?: () => void;
}

const Botao = (props: BotaoProps) => {
  return <button className="botao" onClick={props.onClick}>{props.children}</button>;
};

export default Botao;
