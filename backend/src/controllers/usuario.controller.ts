import { Request, Response } from "express";
import UsuarioService from "../services/usuario.service";

class UsuarioController {

  async obtenerTodos(
    req: Request,
    res: Response
  ): Promise<void> {

    try {

      const usuarios = await UsuarioService.listar();

      res.status(200).json(usuarios);

    } catch {

      res.status(500).json({
        mensaje: "Error al obtener los usuarios"
      });

    }

  }

  async obtenerPorId(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {

    try {

      const usuario = await UsuarioService.obtener(
        req.params.id
      );

      if (!usuario) {

        res.status(404).json({
          mensaje: "Usuario no encontrado"
        });

        return;

      }

      res.status(200).json(usuario);

    } catch {

      res.status(500).json({
        mensaje: "Error al obtener el usuario"
      });

    }

  }

  async crear(
    req: Request,
    res: Response
  ): Promise<void> {

    try {

      const usuario = await UsuarioService.crear(
        req.body
      );

      res.status(201).json({
        mensaje: "Usuario registrado correctamente",
        usuario
      });

    } catch (error: any) {

      res.status(400).json({
        mensaje: error.message
      });

    }

  }

  async login(
    req: Request,
    res: Response
  ): Promise<void> {

  try {

    const { correo, password } = req.body;

    const respuesta = await UsuarioService.login(
      correo,
      password
    );

    res.status(200).json(respuesta);

  } catch (error: any) {

    res.status(401).json({
      mensaje: error.message
    });

    }
  }

  async actualizar(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {

    try {

      const usuario = await UsuarioService.actualizar(
        req.params.id,
        req.body
      );

      if (!usuario) {

        res.status(404).json({
          mensaje: "Usuario no encontrado"
        });

        return;

      }

      res.status(200).json(usuario);

    } catch {

      res.status(500).json({
        mensaje: "Error al actualizar el usuario"
      });

    }

  }

  async eliminar(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {

    try {

      const usuario = await UsuarioService.eliminar(
        req.params.id
      );

      if (!usuario) {

        res.status(404).json({
          mensaje: "Usuario no encontrado"
        });

        return;

      }

      res.status(200).json({
        mensaje: "Usuario eliminado correctamente"
      });

    } catch {

      res.status(500).json({
        mensaje: "Error al eliminar el usuario"
      });

    }

  }

}

export default new UsuarioController();