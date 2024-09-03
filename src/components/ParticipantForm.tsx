// /components/ParticipantForm.tsx
interface ParticipantFormProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export function ParticipantForm({
  name,
  onChange,
  onSubmit,
}: ParticipantFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={onChange}
        placeholder="Nome do participante"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Adicionar Participante
      </button>
    </form>
  );
}
