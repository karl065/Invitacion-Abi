import getControllerUsuarios from '../../controllers/controllersUsuarios/getControllerUsuarios.js';

const getHandlerUsuarios = async (req, res) => {
	try {
		const { nombre, apellido, email, celular } = req.query;

		const usuarios = await getControllerUsuarios(
			nombre,
			apellido,
			email,
			celular
		);

		return res.status(200).json(usuarios);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default getHandlerUsuarios;
