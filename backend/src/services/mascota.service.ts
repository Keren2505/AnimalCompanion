import mascotaRepository from "../repositories/mascota.repository";

class MascotaService {

  listar() {
    return mascotaRepository.listar();
  }

  obtener(id: string) {
    return mascotaRepository.obtener(id);
  }

  crear(data: any) {
    return mascotaRepository.crear(data);
  }

  actualizar(id: string, data: any) {
    return mascotaRepository.actualizar(id, data);
  }

  eliminar(id: string) {
    return mascotaRepository.eliminar(id);
  }

}

export default new MascotaService();