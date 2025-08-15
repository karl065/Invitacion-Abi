import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Invitacion } from './views/Paneles/Client/indexClient.jsx';
import Login from './views/Formularios/Login/Login.jsx';
import LayoutAdmin from './views/Components/LayoutAdmin/LayoutAdmin.jsx';
import { useEffect } from 'react';
import { adminLogoutAction } from './redux/admin/actions/adminLogoutAction.jsx';
import { adminReloginAction } from './redux/admin/actions/adminReloginAction.jsx';
import { useDispatch } from 'react-redux';
import HomeAdmin from './views/Paneles/Admin/Home/HomeAdmin.jsx';
import CrearUsuarios from './views/Formularios/CrearUsuarios/CrearUsuarios.jsx';
import RegalosAdmin from './views/Paneles/Admin/Regalos/RegalosAdmin.jsx';
import CrearRegalos from './views/Formularios/CrearRegalos/CrearRegalos.jsx';

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const token = localStorage.getItem('token');

	useEffect(() => {
		if (!token) {
			adminLogoutAction(dispatch, navigate);
		} else {
			adminReloginAction(token, dispatch, navigate);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Invitacion />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<LayoutAdmin />}>
					<Route index element={<HomeAdmin />} />
					<Route path="crearUsuario" element={<CrearUsuarios />} />
					<Route path="regalos" element={<RegalosAdmin />} />
					<Route path="crearRegalo" element={<CrearRegalos />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
