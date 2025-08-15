import axios from 'axios';
import server from '../../../api/conexiones.jsx';
import { alertWarning } from '../../../helpers/Alertas.jsx';
import { loadingAction } from '../../app/actions/loadingAction.jsx';
import { setLogin } from '../slices/loginSlice.jsx';
import { adminCargarUsuarios } from './adminCargarUsuarios.jsx';
import { adminCargarRegalos } from '../../shared/actions/cargarRegalos.jsx';

export const adminLoginAction = async (userLogin, dispatch, navigate) => {
	try {
		const { data } = await axios.post(`${server.api.baseURL}auth`, userLogin);

		if (data) {
			localStorage.setItem('token', data.token);

			dispatch(setLogin(data));
			adminCargarUsuarios(dispatch);
			adminCargarRegalos(dispatch);
			navigate('/admin');
		}
	} catch (error) {
		const { data } = error.response;
		alertWarning(data);
		loadingAction(false, dispatch);
	}
};
