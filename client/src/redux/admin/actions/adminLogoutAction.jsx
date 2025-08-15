import { setLogin } from '../slices/loginSlice.jsx';

export const adminLogoutAction = async (dispatch, navigate) => {
	try {
		localStorage.removeItem('token');
		dispatch(setLogin([]));
		navigate('/');
	} catch (error) {
		console.log(error);
	}
};
