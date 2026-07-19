import express from 'express';
import cors from 'cors';

import { connectDatabase } from './config/database';
import { env } from './config/env';

import mascotaRoutes from './routes/mascota.route';
import usuarioRoutes from "./routes/usuario.route";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/mascotas', mascotaRoutes);
app.use("/usuarios", usuarioRoutes);

async function startServer() {
  try {

    console.log('Iniciando servidor...');
    console.log('Puerto:', env.PORT);

    await connectDatabase();

    console.log('Base de datos conectada.');

    app.listen(Number(env.PORT), () => {
      console.log(`🚀 Servidor iniciado en el puerto ${env.PORT}`);
    });

  } catch (error) {

    console.error(error);

  }
}

startServer();