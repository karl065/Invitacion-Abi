import express from 'express';
import postHandlerRegalos from './../../handlers/handlerRegalos/postHandlerRegalos.js';
import deleteHandlerRegalos from './../../handlers/handlerRegalos/deleteHandlerRegalos.js';
import putHandlerRegalos from './../../handlers/handlerRegalos/putHandlerRegalos.js';
import getHandlerRegalos from './../../handlers/handlerRegalos/getHandlerRegalos.js';
const router = express.Router();

router.post('/', postHandlerRegalos);
router.delete('/:id', deleteHandlerRegalos);
router.put('/:id', putHandlerRegalos);
router.get('/', getHandlerRegalos);

export default router;
