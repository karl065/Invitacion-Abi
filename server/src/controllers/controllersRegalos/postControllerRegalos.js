import RegalosModel from './../../models/regalos.js';

const postControllerRegalos = async (regaloNuevo) => {
	try {
		const regaloCreado = await RegalosModel.create(regaloNuevo);

		return regaloCreado;
	} catch (error) {
		return error;
	}
};

export default postControllerRegalos;
