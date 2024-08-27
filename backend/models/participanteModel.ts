import { Pool } from "mysql2/promise";

interface Participante {
  id: number;
  nome: string;
  presente: boolean;
  data_registro: Date;
}

class ParticipanteModel {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  async getAll(): Promise<Participante[]> {
    const [rows] = await this.db.query("SELECT * FROM participantes");
    return rows as Participante[];
  }

  async create(nome: string): Promise<Participante> {
    const [result] = await this.db.query(
      "INSERT INTO participantes (nome) VALUES (?)",
      [nome]
    );
    const insertId = (result as any).insertId;
    return { id: insertId, nome, presente: false, data_registro: new Date() };
  }

  async updatePresenca(id: number, presente: boolean): Promise<Participante> {
    await this.db.query("UPDATE participantes SET presente = ? WHERE id = ?", [
      presente,
      id,
    ]);
    return { id, presente } as Participante;
  }
}

export default ParticipanteModel;
export type { Participante };
