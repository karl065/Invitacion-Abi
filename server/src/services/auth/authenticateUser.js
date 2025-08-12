import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UsuariosModel from './../../models/usuarios.js';

const { SECRETA } = process.env;

const authenticateUser = async (email, password) => {
	try {
		const user = await UsuariosModel.findOne({
			email: { $regex: new RegExp('^' + email + '$', 'i') },
		});

		const passwordValid = bcryptjs.compare(password, user.password);

		if (!user || !passwordValid) {
			throw new Error('Usuario o Contraseña incorrectos');
		}

		const payload = {
			user: {
				id: user._id,
				nombre: user.nombre,
			},
		};

		return new Promise((resolve, reject) => {
			jwt.sign(
				payload,
				SECRETA,
				{
					expiresIn: '1d',
				},
				(err, token) => {
					if (err) {
						reject({ msg: 'Error al crear el Token' });
					}
					const auth = {
						token,
						_id: user._id,
						nombre: user.nombre,
						apellido: user.apellido,
						email: user.email,
						celular: user.celular,
					};
					resolve(auth);
				}
			);
		});
	} catch (error) {
		throw error.message;
	}
};

export default authenticateUser;
