import Mascota from "../models/mascota.model";

class MascotaRepository {

  listar() {
    return Mascota.find();
  }

  obtener(id: string) {
    return Mascota.findById(id);
  }

  crear(data: any) {
    return Mascota.create(data);
  }

  actualizar(id: string, data: any) {
    return Mascota.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  eliminar(id: string) {
    return Mascota.findByIdAndDelete(id);
  }

}

export default new MascotaRepository();