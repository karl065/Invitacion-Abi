import RegalosModel from './../../models/regalos.js';

const putControllerRegalos = async (dataUpdate, idRegalo) => {
	try {
		await RegalosModel.findByIdAndUpdate(idRegalo, dataUpdate);
		const regaloActualizado = await RegalosModel.findById(idRegalo);
		return regaloActualizado;
	} catch (error) {
		return error;
	}
};

export default putControllerRegalos;
