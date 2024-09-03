import { FC } from "react";

interface ParticipantItemProps {
  participant: {
    id: number;
    nome: string;
    presente: boolean;
  };
  onTogglePresence: () => void;
}

const ParticipantItem: FC<ParticipantItemProps> = ({
  participant,
  onTogglePresence,
}) => {
  return (
    <li>
      {participant.nome} - {participant.presente ? "Presente" : "Ausente"}
      <button onClick={onTogglePresence}>
        {participant.presente ? "Marcar como Ausente" : "Marcar como Presente"}
      </button>
    </li>
  );
};

export default ParticipantItem;
