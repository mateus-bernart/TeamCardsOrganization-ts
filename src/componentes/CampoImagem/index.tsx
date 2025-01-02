import React from "react";
import "./CampoImagem.css";

interface CampoImagemProps {
  aoAlterado: (arquivo: File | null) => void;
  label: string;
  obrigatorio?: boolean;
}

const CampoImagem = ({ aoAlterado, label, obrigatorio = false }: CampoImagemProps) => {
  const aoSelecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = evento.target.files ? evento.target.files[0] : null;
    aoAlterado(arquivo);
  };

  return (
    <div className="campo-imagem">
      <label>{label}</label>
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        onChange={aoSelecionarArquivo}
        required={obrigatorio}
      />
    </div>
  );
};

export default CampoImagem;
