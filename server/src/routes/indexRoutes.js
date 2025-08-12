import { Router } from 'express';
import regalos from './routesRegalos/routesRegalos.js';
import usuarios from './routesUsuarios/routesUsuarios.js';
import auth from './AuthRoutes/authRoutes.js';

const router = Router();

router.use('/regalos', regalos);
router.use('/usuarios', usuarios);
router.use('/auth', auth);

export default router;
