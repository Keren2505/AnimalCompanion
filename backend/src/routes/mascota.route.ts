import { Router } from 'express';
import MascotaController from '../controllers/mascota.controller';

const router = Router();

router.get('/', MascotaController.obtenerTodas);

router.get('/:id', MascotaController.obtenerPorId);

router.post('/', MascotaController.crear);

router.put('/:id', MascotaController.actualizar);

router.delete('/:id', MascotaController.eliminar);

export default router;