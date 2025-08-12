import UsuariosModel from './../../models/usuarios.js';

const deleteControllerUsuario = async (idUsuario) => {
	try {
		const usuarioEliminado = await UsuariosModel.findById(idUsuario);

		await UsuariosModel.findByIdAndDelete(idUsuario);

		return usuarioEliminado;
	} catch (error) {
		return error;
	}
};

export default deleteControllerUsuario;
