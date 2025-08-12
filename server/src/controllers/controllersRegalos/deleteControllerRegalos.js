import RegalosModel from './../../models/regalos.js';

const deleteControllerRegalos = async (idRegalo) => {
	try {
		const regaloEliminado = await RegalosModel.findById(idRegalo);

		await RegalosModel.findByIdAndDelete(idRegalo);

		return regaloEliminado;
	} catch (error) {
		return error;
	}
};

export default deleteControllerRegalos;
