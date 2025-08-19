import RegalosModel from '../../models/regalos.js';
import UsuariosModel from './../../models/usuarios.js';
import bcryptjs from 'bcryptjs';

const postControllerUsuarios = async (usuarioNuevo, io) => {
	try {
		const { password } = usuarioNuevo;
		if (password) {
			const passwordHash = await bcryptjs.hash(password, 10);
			usuarioNuevo.password = passwordHash;
		}
		const usuarioCreado = await UsuariosModel.create(usuarioNuevo);

		let regaloActualizado = null;

		if (usuarioNuevo.asistencia && usuarioNuevo.regalos) {
			regaloActualizado = await RegalosModel.findByIdAndUpdate(
				usuarioCreado.regalos,
				{ usuarioEncargado: usuarioCreado._id, seleccionado: true },
				{ new: true }
			).populate('usuarioEncargado');
		}

		const usuarioCompleto = await UsuariosModel.findById(
			usuarioCreado._id
		).populate('regalos');

		io.emit('usuarioCreado', usuarioCompleto); // notifica nuevo usuario
		if (regaloActualizado) {
			io.emit('regaloActualizado', regaloActualizado); // notifica regalo actualizado
		}

		return usuarioCompleto;
	} catch (error) {
		return error;
	}
};

export default postControllerUsuarios;
