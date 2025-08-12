import UsuariosModel from './../../models/usuarios.js';

const getControllerUsuarios = async () => {
	try {
		const usuarios = await UsuariosModel.find().populate('regalos');
		return usuarios;
	} catch (error) {
		return error;
	}
};

export default getControllerUsuarios;
