import { Request, Response } from 'express';
import MascotaService from '../services/mascota.service';

class MascotaController {

  async obtenerTodas(req: Request, res: Response): Promise<void> {
    try {
      const mascotas = await MascotaService.listar();
      res.status(200).json(mascotas);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener las mascotas' });
    }
  }

  async obtenerPorId(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const id = req.params.id;

      const mascota = await MascotaService.obtener(id);

      if (!mascota) {
        res.status(404).json({ mensaje: 'Mascota no encontrada' });
        return;
      }

      res.status(200).json(mascota);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener la mascota' });
    }
  }

  async crear(req: Request, res: Response): Promise<void> {
    try {
      const mascota = await MascotaService.crear(req.body);
      res.status(201).json(mascota);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear la mascota' });
    }
  }

  async actualizar(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const id = req.params.id;

      const mascota = await MascotaService.actualizar(id, req.body);

      if (!mascota) {
        res.status(404).json({ mensaje: 'Mascota no encontrada' });
        return;
      }

      res.status(200).json(mascota);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar la mascota' });
    }
  }

  async eliminar(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const id = req.params.id;

      const mascota = await MascotaService.eliminar(id);

      if (!mascota) {
        res.status(404).json({ mensaje: 'Mascota no encontrada' });
        return;
      }

      res.status(200).json({
        mensaje: 'Mascota eliminada correctamente'
      });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la mascota' });
    }
  }

}

export default new MascotaController();