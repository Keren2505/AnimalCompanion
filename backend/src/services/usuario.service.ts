import bcrypt from "bcrypt";
import usuarioRepository from "../repositories/usuario.repository";

class UsuarioService {

  listar() {
    return usuarioRepository.listar();
  }

  obtener(id: string) {
    return usuarioRepository.obtener(id);
  }

  obtenerPorCorreo(correo: string) {
    return usuarioRepository.obtenerPorCorreo(correo);
  }

  async crear(data: any) {

    const existe = await usuarioRepository.obtenerPorCorreo(
      data.correo
    );

    if (existe) {

      throw new Error("El correo ya está registrado");

    }

    const passwordEncriptada = await bcrypt.hash(
      data.password,
      10
    );

    data.password = passwordEncriptada;

    return usuarioRepository.crear(data);

  }

  async login(correo: string, password: string) {

    const usuario = await usuarioRepository.obtenerPorCorreo(correo);

    if (!usuario) {

        throw new Error("Correo o contraseña incorrectos");

    }

    const bcrypt = await import("bcrypt");

    const coincide = await bcrypt.default.compare(
        password,
        usuario.password
    );

    if (!coincide) {

        throw new Error("Correo o contraseña incorrectos");

    }

    return usuario;
  }

  actualizar(id: string, data: any) {
    return usuarioRepository.actualizar(id, data);
  }

  eliminar(id: string) {
    return usuarioRepository.eliminar(id);
  }

}

export default new UsuarioService();