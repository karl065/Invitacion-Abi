import RegalosModel from '../../models/regalos.js';
import UsuariosModel from './../../models/usuarios.js';
import bcryptjs from 'bcryptjs';

const postControllerUsuarios = async (usuarioNuevo) => {
	try {
		const { password } = usuarioNuevo;

		const passwordHash = await bcryptjs.hash(password, 10);
		usuarioNuevo.password = passwordHash;

		const usuarioCreado = await UsuariosModel.create(usuarioNuevo);

		if (usuarioNuevo.asistencia && usuarioNuevo.regalos) {
			await RegalosModel.findByIdAndUpdate(
				usuarioCreado.regalos,
				{ usuarioEncargado: usuarioCreado._id, seleccionado: true },
				{ new: true }
			);
		}

		const usuarioCompleto = await UsuariosModel.findById(
			usuarioCreado._id
		).populate('regalos');

		return usuarioCompleto;
	} catch (error) {
		return error;
	}
};

export default postControllerUsuarios;
