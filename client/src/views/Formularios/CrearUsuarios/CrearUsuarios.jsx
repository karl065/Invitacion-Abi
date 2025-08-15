import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { alertSuccess } from '../../../helpers/Alertas.jsx';
import { agregarUsuario } from '../../../redux/admin/actions/adminCrearUsuarios.jsx';
import { useDispatch } from 'react-redux';

const CrearUsuarios = () => {
	const dispatch = useDispatch();

	const [verContraseña, setVerContraseña] = useState(false);
	const [verRepetirContraseña, setVerRepetirContraseña] = useState(false);

	const validationSchema = Yup.object({
		nombre: Yup.string().required('Nombre requerido'),
		apellido: Yup.string().required('Apellido requerido'),
		email: Yup.string()
			.email('Formato de correo electrónico inválido')
			.required('Correo electrónico requerido'),
		password: Yup.string()
			.min(8, 'La password debe tener al menos 8 caracteres')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
				'Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial'
			)
			.required('Contraseña requerida'),
		repetirContraseña: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Las passwords deben coincidir')
			.required('Repetir password requerida')
			.test(
				'repetir-password',
				'Las passwords deben coincidir',
				function (value) {
					return value === this.parent.password;
				}
			),
	});

	const formik = useFormik({
		initialValues: {
			nombre: '',
			apellido: '',
			email: '',
			password: '',
			repetirContraseña: '',
			celular: '',
			asistencia: true,
		},
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			agregarUsuario(values, dispatch);
			alertSuccess('Usuario creado con Exito');

			resetForm();
		},
	});

	const handleVerContraseña = () => {
		setVerContraseña(!verContraseña);
	};
	const handleVerRepetirContraseña = () => {
		setVerRepetirContraseña(!verRepetirContraseña);
	};

	return (
		<div className="w-full h-full flex items-center justify-center ">
			<div className="items-center justify-center p-2 space-y-2 rounded-lg shadow-2xl h-fit w-fit text-sm">
				<form className="space-y-2 " onSubmit={formik.handleSubmit}>
					<div className="flex flex-col space-y-2">
						<div className="flex space-x-2">
							<div className="relative">
								<input
									type="text"
									name="nombre"
									id="nombre"
									className={`p-2 shadow-xl rounded-lg focus:border focus:border-secondary-button text-colors ${
										formik.touched.nombre && formik.errors.nombre
											? 'border-red-500'
											: ''
									}`}
									placeholder="Nombre"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.nombre}
								/>
								<div
									className={`text-xs bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10 ${
										formik.touched.nombre && formik.errors.nombre
											? 'visible'
											: 'hidden'
									}`}>
									{formik.errors.nombre}
								</div>
							</div>
							<div className="relative">
								<input
									type="text"
									name="apellido"
									id="apellido"
									className={`p-2 shadow-xl rounded-lg focus:border focus:border-secondary-button text-colors ${
										formik.touched.apellido && formik.errors.apellido
											? 'border-red-500'
											: ''
									}`}
									placeholder="Apellido"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.apellido}
								/>
								<div
									className={`text-xs bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10 ${
										formik.touched.apellido && formik.errors.apellido
											? 'visible'
											: 'hidden'
									}`}>
									{formik.errors.apellido}
								</div>
							</div>
						</div>
						<div className="flex space-x-2">
							<div className="relative">
								<input
									type="email"
									name="email"
									id="email"
									className={`p-2 shadow-xl rounded-lg focus:border focus:border-secondary-button text-colors ${
										formik.touched.email && formik.errors.email
											? 'border-red-500'
											: ''
									}`}
									placeholder="Email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
								<div
									className={`text-xs bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10 ${
										formik.touched.email && formik.errors.email
											? 'visible'
											: 'hidden'
									}`}>
									{formik.errors.email}
								</div>
							</div>
							<div className="relative">
								<input
									type="text"
									name="celular"
									id="celular"
									className={`p-2 shadow-xl rounded-lg focus:border focus:border-secondary-button text-colors ${
										formik.touched.celular && formik.errors.celular
											? 'border-red-500'
											: ''
									}`}
									placeholder="Celular"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.celular}
								/>
								<div
									className={`text-xs bg-black rounded-lg p-2 text-red-500 absolute top-full z-10 ${
										formik.touched.celular && formik.errors.celular
											? 'visible'
											: 'hidden'
									}`}>
									{formik.errors.celular}
								</div>
							</div>
						</div>
						<div className="flex space-x-2">
							<div className="relative">
								<input
									type={verContraseña ? 'text' : 'password'}
									name="password"
									id="password"
									className={`p-2 shadow-xl rounded-lg focus:border focus:border-secondary-button text-colors ${
										formik.touched.password && formik.errors.password
											? 'border-red-500'
											: ''
									}`}
									placeholder="Contraseña"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
								<button
									type="button"
									onClick={handleVerContraseña}
									className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none">
									{verContraseña ? (
										<AiFillEyeInvisible className="text-gray-400" />
									) : (
										<AiFillEye className="text-gray-400" />
									)}
								</button>
								<div
									className={`text-xs bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10 ${
										formik.touched.password && formik.errors.password
											? 'visible'
											: 'hidden'
									}`}>
									{formik.errors.password}
								</div>
							</div>
							<div className="relative">
								<input
									type={verRepetirContraseña ? 'text' : 'password'}
									name="repetirContraseña"
									id="repetirContraseña"
									className={`p-2 shadow-xl rounded-lg focus:border focus:border-secondary-button text-colors ${
										formik.touched.repetirContraseña &&
										formik.errors.repetirContraseña
											? 'border-red-500'
											: ''
									}`}
									placeholder="Repetir Contraseña"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.repetirContraseña}
								/>
								<button
									type="button"
									onClick={handleVerRepetirContraseña}
									className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none">
									{verRepetirContraseña ? (
										<AiFillEyeInvisible className="text-gray-400" />
									) : (
										<AiFillEye className="text-gray-400" />
									)}
								</button>
								<div
									className={`text-xs bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10 ${
										formik.touched.repetirContraseña &&
										formik.errors.repetirContraseña
											? 'visible'
											: 'hidden'
									}`}>
									{formik.errors.repetirContraseña}
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-between h-full space-y-2">
						<div className="flex items-end justify-center">
							<button
								type="submit"
								className="p-2 font-bold shadow-xl uppercase transition-colors rounded-lg bg-secondary-button hover:text-gray-100">
								Crear Usuario
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CrearUsuarios;
