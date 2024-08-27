import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./databases/dbConnection"; // Importa a conexão com o banco de dados
import participantesRoutes from "./routes/participantesRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rota de participantes
app.use("/participantes", participantesRoutes);

// Função para verificar a conexão com o banco de dados
async function checkDatabaseConnection() {
  try {
    await db.query("SELECT 1"); // Executa uma consulta simples para testar a conexão
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    return true;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:");
    return false;
  }
}

// Inicia o servidor após verificar a conexão com o banco de dados
async function startServer() {
  const isDbConnected = await checkDatabaseConnection();
  if (isDbConnected) {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } else {
    console.error(
      "Não foi possível estabelecer a conexão com o banco de dados. O servidor não será iniciado."
    );
  }
}

startServer(); // Chama a função que verifica a conexão e inicia o servidor
