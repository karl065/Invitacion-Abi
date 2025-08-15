import axios from 'axios';
import server from '../../../api/conexiones.jsx';
import { actualizarRegalos } from '../slices/RegalosSlice.jsx';

export const agregarRegalo = async (dataRegalo, dispatch) => {
	try {
		const { data } = await axios.post(
			`${server.api.baseURL}regalos`,
			dataRegalo
		);
		console.log(data);

		dispatch(actualizarRegalos(data));

		// socket.emit('cargarUsuarios');
	} catch (error) {
		console.log(error);
	}
};
