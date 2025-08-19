import express from 'express';
import postHandlerUsuario from './../../handlers/handlersUsuarios/postHandlerUsuarios.js';
import deleteHandlerUsuario from './../../handlers/handlersUsuarios/deleteHandlerUsuario.js';
import putHandlerUsuarios from './../../handlers/handlersUsuarios/putHandlerUsuario.js';
import getHandlerUsuarios from './../../handlers/handlersUsuarios/getHandlerUsuario.js';
const router = express.Router();

router.post('/', postHandlerUsuario);
router.delete('/:id', deleteHandlerUsuario);
router.put('/:id', putHandlerUsuarios);
router.get('/', getHandlerUsuarios);

export default router;
