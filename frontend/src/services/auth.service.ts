import api from "./api";

class AuthService {

  async login(correo: string, password: string) {

    const respuesta = await api.post(
      "/usuarios/login",
      {
        correo,
        password
      }
    );

    localStorage.setItem(
      "token",
      respuesta.data.token
    );

    if (respuesta.data.usuario) {
      localStorage.setItem(
        "usuario",
        JSON.stringify(respuesta.data.usuario)
      );
    }

    return respuesta.data;

  }

  async register(usuario: {
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    telefono: string;
  }) {

    const respuesta = await api.post(
      "/usuarios",
      usuario
    );

    return respuesta.data;

  }

  logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

  }

  obtenerUsuario() {

    const usuario = localStorage.getItem("usuario");

    if (!usuario || usuario === "undefined") {
      return null;
    }

    try {
      return JSON.parse(usuario);
    } catch {
      localStorage.removeItem("usuario");
      return null;
    }

  }

  estaAutenticado() {

    return !!localStorage.getItem("token");

  }

}

export default new AuthService();