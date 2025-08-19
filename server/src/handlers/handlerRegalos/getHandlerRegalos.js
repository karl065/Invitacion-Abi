import getControllerRegalos from '../../controllers/controllersRegalos/getControllerRegalos.js';

const getHandlerRegalos = async (req, res) => {
	try {
		const filtros = req.query;

		const regalos = await getControllerRegalos(filtros);

		req.io.emit('cargarRegalos', regalos);

		return res.status(200).json(regalos);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default getHandlerRegalos;
