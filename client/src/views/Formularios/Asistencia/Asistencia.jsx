import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { alertSuccess } from '../../../helpers/Alertas.jsx';
import { agregarUsuario } from '../../../redux/admin/actions/adminCrearUsuarios.jsx';

const Asistencia = ({ onClose }) => {
	const dispatch = useDispatch();
	const regalos = useSelector((state) => state.regalos.regalos);

	const validationSchema = Yup.object({
		nombre: Yup.string().required('Nombre requerido'),
		apellido: Yup.string().required('Apellido requerido'),
		email: Yup.string()
			.email('Formato de correo electrónico inválido')
			.required('Correo electrónico requerido'),
		celular: Yup.number().required('Celular requerido'),
		asistencia: Yup.boolean().required('Asistencia requerida'),
		solo: Yup.boolean().when('asistencia', {
			is: true,
			then: (schema) => schema.required('Debe indicar si va solo o acompañado'),
		}),
		acompanantes: Yup.number().when('solo', {
			is: false, // 👈 cuando elige "no" (acompañado)
			then: (schema) =>
				schema
					.required('Número de acompañantes requerido')
					.min(1, 'Debe ser al menos 1 acompañante'),
			otherwise: (schema) => schema.notRequired(),
		}),
		regalos: Yup.string().required('Regalo requerido'),
	});

	const formik = useFormik({
		initialValues: {
			nombre: '',
			apellido: '',
			email: '',
			celular: '',
			asistencia: null,
			solo: null,
			acompanantes: '',
			regalos: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			agregarUsuario(values, dispatch);
			alertSuccess('Usuario creado con Éxito');
			resetForm();
			if (onClose) onClose();
		},
	});

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="items-center justify-center p-2 space-y-2 rounded-lg shadow-2xl h-fit w-fit text-sm">
				<form className="space-y-4" onSubmit={formik.handleSubmit}>
					{/* Nombre y Apellido */}
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
							{formik.touched.nombre && formik.errors.nombre && (
								<div className="text-xs text-red-500 absolute top-full">
									{formik.errors.nombre}
								</div>
							)}
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
							{formik.touched.apellido && formik.errors.apellido && (
								<div className="text-xs text-red-500 absolute top-full">
									{formik.errors.apellido}
								</div>
							)}
						</div>
					</div>

					{/* Email y Celular */}
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
							{formik.touched.email && formik.errors.email && (
								<div className="text-xs text-red-500 absolute top-full">
									{formik.errors.email}
								</div>
							)}
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
							{formik.touched.celular && formik.errors.celular && (
								<div className="text-xs text-red-500 absolute top-full">
									{formik.errors.celular}
								</div>
							)}
						</div>
					</div>

					{/* Asistencia */}
					<div className="relative">
						<label className="block text-sm font-medium text-gray-700">
							¿Asistirá?
						</label>
						<div className="flex gap-4 mt-2">
							<label className="flex items-center gap-2">
								<input
									type="radio"
									name="asistencia"
									value="true"
									checked={formik.values.asistencia === true}
									onChange={() => formik.setFieldValue('asistencia', true)}
									className="accent-green-600"
								/>
								Sí
							</label>
							<label className="flex items-center gap-2">
								<input
									type="radio"
									name="asistencia"
									value="false"
									checked={formik.values.asistencia === false}
									onChange={() => formik.setFieldValue('asistencia', false)}
									className="accent-red-600"
								/>
								No
							</label>
						</div>
						{formik.touched.asistencia && formik.errors.asistencia && (
							<div className="text-xs text-red-500 absolute top-full">
								{formik.errors.asistencia}
							</div>
						)}
					</div>

					{/* Solo o acompañado */}
					{formik.values.asistencia === true && (
						<div className="relative">
							<label className="block text-sm font-medium text-gray-700">
								¿Asistirá solo?
							</label>
							<div className="flex gap-4 mt-2">
								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="solo"
										checked={formik.values.solo === true}
										onChange={() => formik.setFieldValue('solo', true)}
										className="accent-blue-600"
									/>
									Sí
								</label>
								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="solo"
										checked={formik.values.solo === false}
										onChange={() => formik.setFieldValue('solo', false)}
										className="accent-blue-600"
									/>
									No
								</label>
							</div>
							{formik.touched.solo && formik.errors.solo && (
								<div className="text-xs text-red-500 absolute top-full">
									{formik.errors.solo}
								</div>
							)}
						</div>
					)}

					{/* --- Número de acompañantes --- */}
					{formik.values.solo === false && (
						<div className="relative">
							<label className="block text-sm font-medium text-gray-700">
								¿Cuántos acompañantes?
							</label>
							<input
								type="number"
								name="acompanantes"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.acompanantes}
								className={`p-2 shadow-xl rounded-lg w-full ${
									formik.touched.acompanantes && formik.errors.acompanantes
										? 'border-red-500'
										: ''
								}`}
							/>
							{formik.touched.acompanantes && formik.errors.acompanantes && (
								<div className="text-xs text-red-500 absolute top-full">
									{formik.errors.acompanantes}
								</div>
							)}
						</div>
					)}
					{/* Regalos */}
					<div className="relative">
						<label className="block text-sm font-medium text-gray-700">
							¿Qué regalo llevará?
						</label>
						<select
							name="regalos"
							id="regalos"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.regalos}
							className={`p-2 shadow-xl rounded-lg w-full ${
								formik.touched.regalos && formik.errors.regalos
									? 'border-red-500'
									: ''
							}`}>
							<option value="">Seleccione un regalo...</option>
							{regalos
								?.filter((regalo) => !regalo.seleccionado && regalo._id) // 👈 solo los no seleccionados
								.map((regalo) => (
									<option key={regalo._id} value={regalo._id}>
										{regalo.nombre}
									</option>
								))}
						</select>
						{formik.touched.regalos && formik.errors.regalos && (
							<div className="text-xs text-red-500 absolute top-full">
								{formik.errors.regalos}
							</div>
						)}
					</div>

					{/* Botón de enviar */}
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="p-2 font-bold shadow-xl uppercase transition-colors rounded-lg bg-secondary-button hover:text-gray-100">
							Confirmar Asistencia
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Asistencia;
