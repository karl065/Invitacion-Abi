import axios from 'axios';
import server from '../../../api/conexiones.jsx';
import { cargarUsuarios } from '../slices/usuariosSlice.jsx';

export const adminCargarUsuarios = async (dispatch) => {
	try {
		const { data } = await axios.get(`${server.api.baseURL}usuarios`);

		dispatch(cargarUsuarios(data));
	} catch (error) {
		console.log(error);
	}
};
