import axios from 'axios';
import server from '../../../api/conexiones.jsx';
import { actualizarRegalos } from '../slices/RegalosSlice.jsx';
import socket from '../../../services/socket.js';

export const agregarRegalo = async (dataRegalo, dispatch) => {
	try {
		const { data } = await axios.post(
			`${server.api.baseURL}regalos`,
			dataRegalo
		);

		dispatch(actualizarRegalos(data));

		socket.emit('regaloCreado', data);
	} catch (error) {
		console.log(error);
	}
};
