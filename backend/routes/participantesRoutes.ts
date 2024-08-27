import { Router } from "express";
import db from "../databases/dbConnection";
import ParticipanteModel from "../models/participanteModel";
import ParticipanteService from "../services/participanteService";
import ParticipantesController from "../controllers/participantesController";

const router = Router();

// Injeção de dependências
const participanteModel = new ParticipanteModel(db);
const participanteService = new ParticipanteService(participanteModel);
const participantesController = new ParticipantesController(
  participanteService
);

router.get("/", participantesController.listar);
router.post("/", participantesController.adicionar);
router.put("/:id", participantesController.marcarPresenca);

export default router;
