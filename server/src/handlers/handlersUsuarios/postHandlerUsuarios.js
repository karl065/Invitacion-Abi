import postControllerUsuarios from '../../controllers/controllersUsuarios/postControllerUsuarios.js';

const postHandlerUsuario = async (req, res) => {
	try {
		const usuarioNuevo = req.body;

		const usuarioCreado = await postControllerUsuarios(usuarioNuevo);

		return res.status(200).json(usuarioCreado);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default postHandlerUsuario;
