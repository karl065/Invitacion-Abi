import RegalosModel from './../../models/regalos.js';

const getControllerRegalos = async ({ nombre, seleccionado }) => {
	try {
		const whereConditions = {
			...(nombre && { nombre: new RegExp(nombre, 'i') }),
			...(seleccionado !== undefined && { seleccionado }),
		};

		const regalos = await RegalosModel.find(
			Object.keys(whereConditions).length > 0 ? whereConditions : {}
		).populate('usuarioEncargado');

		return regalos;
	} catch (error) {
		return error;
	}
};

export default getControllerRegalos;
