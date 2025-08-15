import axios from 'axios';
import server from '../../../api/conexiones.jsx';
import { cargarRegalos } from '../slices/RegalosSlice.jsx';

export const adminCargarRegalos = async (dispatch) => {
	try {
		const { data } = await axios.get(`${server.api.baseURL}regalos`);

		dispatch(cargarRegalos(data));
	} catch (error) {
		console.log(error);
	}
};
