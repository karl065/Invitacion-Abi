import express from 'express';
import postHandlerUsuario from './../../handlers/handlersUsuarios/postHandlerUsuarios';
import deleteHandlerUsuario from './../../handlers/handlersUsuarios/deleteHandlerUsuario';
import putHandlerUsuarios from './../../handlers/handlersUsuarios/putHandlerUsuario';
import getHandlerUsuarios from './../../handlers/handlersUsuarios/getHandlerUsuario';
const router = express.Router();

router.post('/', postHandlerUsuario);
router.delete('/:id', deleteHandlerUsuario);
router.put('/:id', putHandlerUsuarios);
router.get('/', getHandlerUsuarios);

export default router;
