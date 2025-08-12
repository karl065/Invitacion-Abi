import mongoose from 'mongoose';
import connection from '../config/DBConnection';

const RegalosSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true,
	},
	descripcion: {
		type: String,
		required: true,
		trim: true,
	},
	seleccionado: {
		type: Boolean,
		default: false,
	},
	usuarioEncargado: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Usuarios',
	},
});

const RegalosModel = connection.model('Regalos', RegalosSchema);
export default RegalosModel;
