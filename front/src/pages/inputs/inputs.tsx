import Topo from "@/components/Topo";
import { useState } from "react";

export default function Inputs() {
  const [nome, setNome] = useState<String>("");
  const [curso, setCurso] = useState<String>("");
  return (
    <div>
      <Topo />
      <div className="campoForm">
        <label htmlFor="firstName">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(evt) => setNome(evt.target.value)}
        />
      </div>
      <div className="campoForm">
        <label htmlFor="curso">Curso:</label>
        <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
          <option value={""}></option>
          <option value={" React Nex"}>React Nex</option>
          <option value={"Mongo DB"}>Mongo DB</option>
          <option value={"Etnical haker"}>Etnical haker</option>
          <option value={"REact Remix"}>REact Remix</option>
          <option value={"MYSQl"}>MYSQl</option>
          <option value={"NO SQL"}>NO SQL</option>
        </select>
      </div>

      <div>Nome Digitado:{nome} </div>

      <div>Curso Selecionado:{curso} </div>
    </div>
  );
}
