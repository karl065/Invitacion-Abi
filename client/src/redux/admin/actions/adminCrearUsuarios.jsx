import axios from 'axios';
import server from '../../../api/conexiones.jsx';
import { actualizarUsuario } from '../slices/usuariosSlice.jsx';

export const agregarUsuario = async (dataUsuario, dispatch) => {
	try {
		const { data } = await axios.post(
			`${server.api.baseURL}usuarios`,
			dataUsuario
		);

		dispatch(actualizarUsuario(data));
		// socket.emit('cargarUsuarios');
	} catch (error) {
		console.log(error);
	}
};
