import express, { Router } from "express";
import cors from "cors";
import router from "./routes/index";
import dotenv  from "dotenv";

dotenv.config()

const app = express();
//CONFIGURAÇÕES
app.use(cors());
app.use(express.json());

//ROTAS
app.use(router);

const port:number = Number(process.env.PORT) || 5000;

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));
