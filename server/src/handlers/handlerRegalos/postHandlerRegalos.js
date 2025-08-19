import postControllerRegalos from '../../controllers/controllersRegalos/postControllerRegalos.js';

const postHandlerRegalos = async (req, res) => {
	try {
		const regaloNuevo = req.body;

		const regaloCreado = await postControllerRegalos(regaloNuevo);
		req.io.emit('regaloCreado', regaloCreado);

		return res.status(200).json(regaloCreado);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default postHandlerRegalos;
