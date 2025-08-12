import UsuariosModel from './../../models/usuarios.js';
import RegalosModel from './../../models/regalos.js';

const putControllerUsuarios = async (dataUpdate, idUsuario) => {
	try {
		await UsuariosModel.findByIdAndUpdate(idUsuario, dataUpdate);

		if (dataUpdate.regalo) {
			await RegalosModel.findByIdAndUpdate(dataUpdate.regalo, {
				usuario: idUsuario,
			});
		}
		const usuarioActualizado = await UsuariosModel.findById(idUsuario);

		return usuarioActualizado;
	} catch (error) {
		return error;
	}
};

export default putControllerUsuarios;
