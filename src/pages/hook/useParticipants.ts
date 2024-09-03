// /hooks/useParticipants.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchParticipants = async () => {
  const { data } = await axios.get("http://192.168.1.183:5000/participantes");

  return data;
};

const addParticipant = async (newParticipant: {
  name: string;
  present: boolean;
}) => {
  const { data } = await axios.post(
    "http://192.168.1.183:5000/participantes",
    newParticipant
  );
  return data;
};

// Encapsular id e present em um objeto
const updateParticipantPresence = async (update: {
  id: number;
  present: boolean;
}) => {
  const { id, present } = update;
  try {
    // Log para verificar o envio correto dos dados
    console.log(
      "Atualizando participante com ID:",
      id,
      "para presente:",
      present
    );

    // Envio da requisição PUT
    await axios.put(`http://192.168.1.183:5000/participantes/${id}`, {
      present,
    });
  } catch (error) {
    console.error("Erro ao atualizar participante:", error);
  }
};

export function useParticipants() {
  return useQuery({
    queryKey: ["participants"],
    queryFn: fetchParticipants,
  });
}

export function useAddParticipant() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addParticipant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["participants"] });
    },
  });
}

export function useUpdateParticipantPresence() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateParticipantPresence,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["participants"] });
    },
  });
}
