import axios from 'axios';
import { isTokenExpired } from '../../../helpers/Verificacion';
import { alertInfo, alertSuccess } from '../../../helpers/Alertas';
import server from '../../../api/conexiones';
import { setLogin } from '../slices/loginSlice';
import { adminCargarUsuarios } from './adminCargarUsuarios';
import { adminCargarRegalos } from '../../shared/actions/cargarRegalos';

export const adminReloginAction = async (token, dispatch, navigate) => {
	try {
		if (token) {
			const expirado = isTokenExpired(token, dispatch, navigate);
			if (!expirado) {
				const { data } = await axios.get(`${server.api.baseURL}auth`, {
					headers: {
						'x-auth-token': token,
					},
				});

				if (data) {
					adminCargarUsuarios(dispatch);
					adminCargarRegalos(dispatch);
					dispatch(setLogin(data));
				}

				navigate('/admin');

				alertSuccess(`Bienvenido de nuevo ${data.nombre}`);
			}
		}
	} catch (error) {
		console.log(error);
		const { msg } = error.response.data;
		if (msg === 'Token no valido') {
			localStorage.removeItem('token');
			alertInfo('Tu sesión ha expirado, por favor inicia sesión nuevamente.');
			navigate('/');
		} else if (msg === 'No hay token') navigate('/');
	}
};
