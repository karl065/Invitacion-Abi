import { jwtDecode } from 'jwt-decode';

import { alertInfo } from './Alertas';
import { adminLogoutAction } from '../redux/admin/actions/adminLogoutAction';

export const isTokenExpired = (token, dispatch, navigate) => {
	try {
		const decodedToken = jwtDecode(token);

		const currentTime = Date.now() / 1000; // Convertir a segundos
		const expired = decodedToken.exp < currentTime;

		if (expired) {
			localStorage.removeItem('token');
			localStorage.removeItem('connect');
			alertInfo('Tu sesión ha expirado, por favor inicia sesión nuevamente.');

			adminLogoutAction(dispatch, navigate);
		}

		return expired;
	} catch (error) {
		// Manejar cualquier error al decodificar el token
		console.error('Error al decodificar el token', error);
		return true; // Tratar como expirado en caso de error
	}
};
