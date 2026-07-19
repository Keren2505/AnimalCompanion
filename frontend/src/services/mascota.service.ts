import api from "./api";
import { Mascota } from "../types/mascota";

class MascotaService {

  listar(): Promise<Mascota[]> {
    return api.get("/mascotas").then((res) => res.data);
  }

  obtener(id: string): Promise<Mascota> {
    return api.get(`/mascotas/${id}`).then((res) => res.data);
  }

  crear(mascota: Mascota): Promise<Mascota> {

    console.log("========== ENVIANDO MASCOTA ==========");
    console.log(mascota);

    return api
      .post("/mascotas", mascota)
      .then((res) => {
        console.log("========== RESPUESTA DEL SERVIDOR ==========");
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {

        console.error("========== ERROR ==========");

        console.error("STATUS:");
        console.error(err.response?.status);

        console.error("DATA:");
        console.error(err.response?.data);

        console.error("ERROR:");
        console.error(err);

        throw err;
      });
  }

  actualizar(id: string, mascota: Mascota): Promise<Mascota> {
    return api.put(`/mascotas/${id}`, mascota).then((res) => res.data);
  }

  eliminar(id: string): Promise<void> {
    return api.delete(`/mascotas/${id}`);
  }

}

export default new MascotaService();