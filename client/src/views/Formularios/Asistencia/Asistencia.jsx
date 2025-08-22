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
			is: false,
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
		<div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-2xl items-center justify-center p-4 sm:p-6 space-y-4 rounded-lg shadow-2xl text-sm">
				<form className="space-y-6" onSubmit={formik.handleSubmit}>
					{/* Nombre y Apellido */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="relative">
							<input
								type="text"
								name="nombre"
								id="nombre"
								className={`block w-full form-input p-2 shadow-violet-600 shadow-2xl border-none bg-transparent rounded-lg  ${
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
								<div className="text-xs text-red-500 mt-1">
									{formik.errors.nombre}
								</div>
							)}
						</div>
						<div className="relative">
							<input
								type="text"
								name="apellido"
								id="apellido"
								className={`block w-full form-input p-2 shadow-violet-600 shadow-2xl rounded-lg border-none bg-transparent${
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
								<div className="text-xs text-red-500 mt-1">
									{formik.errors.apellido}
								</div>
							)}
						</div>
					</div>

					{/* Email y Celular */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="relative">
							<input
								type="email"
								name="email"
								id="email"
								className={`block w-full form-input p-2 shadow-violet-600 shadow-2xl rounded-lg bg-transparent border-none ${
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
								<div className="text-xs text-red-500 mt-1">
									{formik.errors.email}
								</div>
							)}
						</div>
						<div className="relative">
							<input
								type="text"
								name="celular"
								id="celular"
								className={`block w-full form-input p-2 rounded-lg shadow-violet-600 shadow-2xl border-none bg-transparent ${
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
								<div className="text-xs text-red-500 mt-1">
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
						<div className="flex flex-wrap gap-4 mt-2">
							<label className="flex items-center gap-2">
								<input
									type="radio"
									name="asistencia"
									value="true"
									checked={formik.values.asistencia === true}
									onChange={() => formik.setFieldValue('asistencia', true)}
									className="form-radio accent-green-600"
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
									className="form-radio accent-red-600"
								/>
								No
							</label>
						</div>
						{formik.touched.asistencia && formik.errors.asistencia && (
							<div className="text-xs text-red-500 mt-1">
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
							<div className="flex flex-wrap gap-4 mt-2">
								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="solo"
										checked={formik.values.solo === true}
										onChange={() => formik.setFieldValue('solo', true)}
										className="form-radio accent-blue-600"
									/>
									Sí
								</label>
								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="solo"
										checked={formik.values.solo === false}
										onChange={() => formik.setFieldValue('solo', false)}
										className="form-radio accent-blue-600"
									/>
									No
								</label>
							</div>
							{formik.touched.solo && formik.errors.solo && (
								<div className="text-xs text-red-500 mt-1">
									{formik.errors.solo}
								</div>
							)}
						</div>
					)}

					{/* Número de acompañantes */}
					{formik.values.solo === false &&
						formik.values.asistencia === true && (
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
									className={`block w-full form-input p-2 shadow-violet-600 shadow-2xl border-none bg-transparent rounded-lg ${
										formik.touched.acompanantes && formik.errors.acompanantes
											? 'border-red-500'
											: ''
									}`}
								/>
								{formik.touched.acompanantes && formik.errors.acompanantes && (
									<div className="text-xs text-red-500 mt-1">
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
							className={`block w-full form-select p-2 shadow-violet-600 shadow-2xl border-none bg-transparent rounded-lg ${
								formik.touched.regalos && formik.errors.regalos
									? 'border-red-500'
									: ''
							}`}>
							<option value="">Seleccione un regalo...</option>
							{regalos
								?.filter((regalo) => !regalo.seleccionado && regalo._id)
								.map((regalo) => (
									<option key={regalo._id} value={regalo._id}>
										{regalo.nombre}
									</option>
								))}
						</select>
						{formik.touched.regalos && formik.errors.regalos && (
							<div className="text-xs text-red-500 mt-1">
								{formik.errors.regalos}
							</div>
						)}
					</div>

					{/* Botón */}
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="w-full sm:w-auto px-6 py-2 font-bold shadow-violet-600 shadow-2xl border-none bg-transparent uppercase transition-colors rounded-lg  hover:text-gray-100">
							Confirmar Asistencia
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Asistencia;
