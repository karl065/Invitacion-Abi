import UsuariosModel from './../../models/usuarios.js';

const authenticatedUser = async (id) => {
	try {
		const user = await UsuariosModel.findById(id).select('-password');

		const userObject = user.toObject();

		return userObject;
	} catch (error) {
		throw error;
	}
};

export default authenticatedUser;
