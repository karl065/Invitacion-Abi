import deleteControllerRegalos from '../../controllers/controllersRegalos/deleteControllerRegalos.js';

const deleteHandlerRegalos = async (req, res) => {
	try {
		const { id } = req.params;

		const regaloEliminado = await deleteControllerRegalos(id);

		return res.status(200).json(regaloEliminado);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default deleteHandlerRegalos;
