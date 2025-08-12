import mongoose from 'mongoose';
import connection from '../config/DBConnection.js';

const UsuarioSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true,
	},
	apellido: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
	},
	celular: {
		type: Number,
		required: true,
		trim: true,
	},
	asistencia: {
		type: Boolean,
		required: true,
	},
	solo: {
		type: Boolean,
	},
	acompanantes: {
		type: Number,
	},
	regalos: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Regalos',
	},
});

const UsuariosModel = connection.model('Usuarios', UsuarioSchema);

export default UsuariosModel;
