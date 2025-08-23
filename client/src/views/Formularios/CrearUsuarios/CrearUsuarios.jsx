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

	return (
		<div className="w-full h-full flex items-center justify-center px-2">
			<div className="items-center justify-center p-3 space-y-3 rounded-lg shadow-2xl h-fit w-full max-w-md md:max-w-2xl text-base md:text-lg lg:text-xl">
				<form className="space-y-3" onSubmit={formik.handleSubmit}>
					<div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
						{/* Nombre */}
						<div className="relative flex-1">
							<input
								type="text"
								name="nombre"
								id="nombre"
								className={`w-full p-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 rounded-lg focus:border focus:border-secondary-button text-colors ${
									formik.touched.nombre && formik.errors.nombre
										? 'border-red-500'
										: ''
								}`}
								placeholder="Nombre"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.nombre}
							/>
							{formik.touched.nombre && formik.errors.nombre && (
								<div className="text-sm bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10">
									{formik.errors.nombre}
								</div>
							)}
						</div>

						{/* Apellido */}
						<div className="relative flex-1">
							<input
								type="text"
								name="apellido"
								id="apellido"
								className={`w-full p-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 rounded-lg focus:border focus:border-secondary-button text-colors ${
									formik.touched.apellido && formik.errors.apellido
										? 'border-red-500'
										: ''
								}`}
								placeholder="Apellido"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.apellido}
							/>
							{formik.touched.apellido && formik.errors.apellido && (
								<div className="text-sm bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10">
									{formik.errors.apellido}
								</div>
							)}
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
						{/* Email */}
						<div className="relative flex-1">
							<input
								type="email"
								name="email"
								id="email"
								className={`w-full p-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 rounded-lg focus:border focus:border-secondary-button text-colors ${
									formik.touched.email && formik.errors.email
										? 'border-red-500'
										: ''
								}`}
								placeholder="Email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							{formik.touched.email && formik.errors.email && (
								<div className="text-sm bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10">
									{formik.errors.email}
								</div>
							)}
						</div>

						{/* Celular */}
						<div className="relative flex-1">
							<input
								type="text"
								name="celular"
								id="celular"
								className={`w-full p-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 rounded-lg focus:border focus:border-secondary-button text-colors ${
									formik.touched.celular && formik.errors.celular
										? 'border-red-500'
										: ''
								}`}
								placeholder="Celular"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.celular}
							/>
							{formik.touched.celular && formik.errors.celular && (
								<div className="text-sm bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10">
									{formik.errors.celular}
								</div>
							)}
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
						{/* Password */}
						<div className="relative flex-1">
							<input
								type={verContraseña ? 'text' : 'password'}
								name="password"
								id="password"
								className={`w-full p-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 rounded-lg focus:border focus:border-secondary-button text-colors ${
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
								onClick={() => setVerContraseña(!verContraseña)}
								className="absolute inset-y-0 right-0 flex items-center pr-3">
								{verContraseña ? (
									<AiFillEyeInvisible className="text-black" />
								) : (
									<AiFillEye className="text-black" />
								)}
							</button>
							{formik.touched.password && formik.errors.password && (
								<div className="text-sm bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10">
									{formik.errors.password}
								</div>
							)}
						</div>

						{/* Repetir Password */}
						<div className="relative flex-1">
							<input
								type={verRepetirContraseña ? 'text' : 'password'}
								name="repetirContraseña"
								id="repetirContraseña"
								className={`w-full p-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 rounded-lg focus:border focus:border-secondary-button text-colors ${
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
								onClick={() => setVerRepetirContraseña(!verRepetirContraseña)}
								className="absolute inset-y-0 right-0 flex items-center pr-3">
								{verRepetirContraseña ? (
									<AiFillEyeInvisible className="text-black" />
								) : (
									<AiFillEye className="text-black" />
								)}
							</button>
							{formik.touched.repetirContraseña &&
								formik.errors.repetirContraseña && (
									<div className="text-sm bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10">
										{formik.errors.repetirContraseña}
									</div>
								)}
						</div>
					</div>

					<div className="flex justify-center">
						<button
							type="submit"
							className="w-full md:w-auto px-4 py-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 uppercase rounded-lg bg-secondary-button hover:text-gray-100 md:text-xl">
							Crear Usuario
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CrearUsuarios;
