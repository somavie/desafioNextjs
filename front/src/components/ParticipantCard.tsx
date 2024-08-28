// /components/ParticipantCard.tsx
import React from "react";

interface ParticipantCardProps {
  name: string;
  present: boolean;
  onToggle: () => void;
}

export function ParticipantCard({
  name,
  present,
  onToggle,
}: ParticipantCardProps) {
  return (
    <div
      className={`p-4 border rounded-md ${
        present ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <button
        onClick={onToggle}
        className={`mt-2 px-4 py-2 rounded ${
          present ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {present ? "Marcar como ausente" : "Marcar como presente"}
      </button>
    </div>
  );
}
