// /components/ParticipantList.tsx
interface Participant {
  id: number;
  name: string;
  present: boolean;
}

interface ParticipantListProps {
  participants: Participant[];
  onTogglePresence: (id: number) => void;
}

export function ParticipantList({
  participants,
  onTogglePresence,
}: ParticipantListProps) {
  return (
    <div className="flex flex-col gap-2">
      {participants.map((participant) => (
        <div
          key={participant.id}
          className="flex items-center justify-between p-2 border bg-white"
        >
          <span>{participant.name}</span>
          <button
            onClick={() => onTogglePresence(participant.id)}
            className={`px-4 py-2 rounded ${
              participant.present ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {participant.present ? "Presente" : "Ausente"}
          </button>
        </div>
      ))}
    </div>
  );
}
