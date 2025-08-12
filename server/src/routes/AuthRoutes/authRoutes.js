import { Router } from 'express';
import handlerAuthenticate from './../../handlers/HandlerAuth/HandlerAuthenticate.js';
import handlerAuthenticated from './../../handlers/HandlerAuth/HandlerAuthenticated.js';
import authMiddle from './../../Middleware/authMiddle.js';

const router = Router();

router.post('/', handlerAuthenticate);
router.get('/', authMiddle, handlerAuthenticated);

export default router;
