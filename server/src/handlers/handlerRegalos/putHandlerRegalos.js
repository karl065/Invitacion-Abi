import putControllerRegalos from '../../controllers/controllersRegalos/putControllerRegalos.js';

const putHandlerRegalos = async (req, res) => {
	try {
		const { id } = req.params;

		const dataUpdate = req.body;

		const regaloActualizado = await putControllerRegalos(dataUpdate, id);

		return res.status(200).json(regaloActualizado);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default putHandlerRegalos;
