import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import socket from '../services/socket.js';
import { actualizarUsuario } from '../redux/admin/slices/usuariosSlice.jsx';
import { actualizarRegalos } from '../redux/shared/slices/RegalosSlice.jsx';

const useSocketListeners = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// 📌 escuchar usuarios
		socket.on('usuarioCreado', (nuevoUsuario) => {
			dispatch(actualizarUsuario(nuevoUsuario));
		});

		// 📌 escuchar regalos
		socket.on('regaloActualizado', (regalo) => {
			dispatch(actualizarRegalos(regalo));
		});

		socket.on('regaloCreado', (nuevoRegalo) => {
			dispatch(actualizarRegalos(nuevoRegalo));
		});

		return () => {
			socket.off('usuarioCreado');
			socket.off('regaloActualizado');
		};
	}, [dispatch]);
};

export default useSocketListeners;
