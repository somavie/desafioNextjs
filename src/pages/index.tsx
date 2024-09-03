// /pages/index.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { Header } from "../components/Header";
import { ParticipantForm } from "../components/ParticipantForm";
import { ParticipantList } from "../components/ParticipantList";
import {
  useParticipants,
  useAddParticipant,
  useUpdateParticipantPresence,
} from "../pages/hook/useParticipants";
import Topo from "@/components/Topo";

export default function Home() {
  const { data: participants, isLoading, isError } = useParticipants();
  const { mutate: addParticipant } = useAddParticipant();
  const { mutate: updateParticipantPresence } = useUpdateParticipantPresence();

  const [name, setName] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (name.trim() === "") return;

    addParticipant({ name: name.trim(), present: false });
    setName("");
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading participants</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Topo />
      <Header nome={"Lista de Presença"} />
      <main className="p-4">
        <ParticipantForm
          name={name}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <ParticipantList
          participants={participants}
          onTogglePresence={(id) => {
            const participant = participants.find((p: any) => p.id === id);
            if (participant) {
              updateParticipantPresence({
                id: participant.id,
                present: !participant.present,
              });
            }
          }}
        />
      </main>
    </div>
  );
}
