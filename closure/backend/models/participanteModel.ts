import { Pool } from "mysql2/promise";

interface Participante {
  id: number;
  name: string;
  present: boolean;
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

  async create(name: string): Promise<Participante> {
    const [result] = await this.db.query(
      "INSERT INTO participantes (name) VALUES (?)",
      [name]
    );
    const insertId = (result as any).insertId;
    return { id: insertId, name, present: false, data_registro: new Date() };
  }

  async updatePresenca(id: number, present: boolean): Promise<Participante> {
    await this.db.query("UPDATE participantes SET present = ? WHERE id = ?", [
      present,
      id,
    ]);
    return { id, present } as Participante;
  }
}

export default ParticipanteModel;
export type { Participante };
