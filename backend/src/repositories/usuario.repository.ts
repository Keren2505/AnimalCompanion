import Usuario from "../models/usuario.model";

class UsuarioRepository {

  listar() {
    return Usuario.find();
  }

  obtener(id: string) {
    return Usuario.findById(id);
  }

  obtenerPorCorreo(correo: string) {
    return Usuario.findOne({ correo });
  }

  crear(data: any) {
    return Usuario.create(data);
  }

  actualizar(id: string, data: any) {
    return Usuario.findByIdAndUpdate(id, data, {
      new: true
    });
  }

  eliminar(id: string) {
    return Usuario.findByIdAndDelete(id);
  }

}

export default new UsuarioRepository();