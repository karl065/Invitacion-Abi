// src/services/socket.js
import { io } from 'socket.io-client';
import server from '../api/conexiones.jsx';

const socket = io(server.api.baseURL, {
	transports: ['websocket'], // recomendado para evitar problemas de polling
});

export default socket;
