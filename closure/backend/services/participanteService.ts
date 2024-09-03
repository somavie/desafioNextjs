import ParticipanteModel, { Participante } from "../models/participanteModel";

class ParticipanteService {
  private participanteModel: ParticipanteModel;

  constructor(participanteModel: ParticipanteModel) {
    this.participanteModel = participanteModel;
  }

  async listarParticipantes(): Promise<Participante[]> {
    return this.participanteModel.getAll();
  }

  async adicionarParticipante(nome: string): Promise<Participante> {
    return this.participanteModel.create(nome);
  }

  async marcarPresenca(id: number, presente: boolean): Promise<Participante> {
    return this.participanteModel.updatePresenca(id, presente);
  }
}

export default ParticipanteService;
