import { Router } from 'express';

import regalos from './routesRegalos/routesRegalos.js';
import usuarios from './routesUsuarios/routesUsuarios.js';

const router = Router();

router.use('/regalos', regalos);
router.use('/usuarios', usuarios);

export default router;
