import { Request, Response } from "express";
import ParticipanteService from "../services/participanteService";

class ParticipantesController {
  private participanteService: ParticipanteService;

  constructor(participanteService: ParticipanteService) {
    this.participanteService = participanteService;
  }

  listar = async (req: Request, res: Response) => {
    try {
      const participantes =
        await this.participanteService.listarParticipantes();
      res.json(participantes);
    } catch (err) {
      // console.error(err.message);
      res.status(500).json("Erro no servidor");
    }
  };

  adicionar = async (req: Request, res: Response) => {
    try {
      const { nome } = req.body;
      const novoParticipante =
        await this.participanteService.adicionarParticipante(nome);
      res.json(novoParticipante);
    } catch (err) {
      // console.error(err.message);
      res.status(500).json("Erro no servidor");
    }
  };

  marcarPresenca = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { presente } = req.body;
      const participante = await this.participanteService.marcarPresenca(
        Number(id),
        presente
      );
      res.json(participante);
    } catch (err) {
      // console.error(err.message);
      res.status(500).json("Erro no servidor");
    }
  };
}

export default ParticipantesController;
