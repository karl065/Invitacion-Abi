import axios from 'axios';
import server from '../../../api/conexiones.jsx';
import { actualizarUsuario } from '../slices/usuariosSlice.jsx';
import socket from '../../../services/socket.js';
import { actualizarRegalos } from '../../shared/slices/RegalosSlice.jsx';

export const agregarUsuario = async (dataUsuario, dispatch) => {
	try {
		const { data } = await axios.post(
			`${server.api.baseURL}usuarios`,
			dataUsuario
		);

		dispatch(actualizarUsuario(data));

		socket.emit('usuarioCreado', data);

		// ✅ si en el usuario vienen regalos, también emitimos regaloActualizado
		if (dataUsuario.regalos) {
			socket.emit('regaloActualizado', dataUsuario.regalos);
			dispatch(actualizarRegalos(dataUsuario.regalos));
		}
	} catch (error) {
		console.log(error);
	}
};
