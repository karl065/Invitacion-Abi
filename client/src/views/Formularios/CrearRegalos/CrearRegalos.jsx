import * as Yup from 'yup';
import { useFormik } from 'formik';
import { alertSuccess } from '../../../helpers/Alertas.jsx';
import { agregarRegalo } from '../../../redux/shared/actions/crearReagalo.jsx';
import { useDispatch } from 'react-redux';

const CrearRegalos = () => {
	const dispatch = useDispatch();

	const validationSchema = Yup.object({
		nombre: Yup.string().required('Nombre requerido'),
		descripcion: Yup.string().required('Descripción requerida'),
	});

	const formik = useFormik({
		initialValues: {
			nombre: '',
			descripcion: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			agregarRegalo(values, dispatch);
			alertSuccess('Regalo creado con Éxito');
			resetForm();
		},
	});

	return (
		<div className="w-full h-full flex items-center justify-center px-2">
			<div className="items-center justify-center p-3 space-y-3 rounded-lg shadow-2xl h-fit w-full max-w-md md:max-w-2xl text-base md:text-lg lg:text-xl">
				<form className="space-y-3" onSubmit={formik.handleSubmit}>
					{/* Nombre y Descripción */}
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

						{/* Descripción */}
						<div className="relative flex-1">
							<input
								type="text"
								name="descripcion"
								id="descripcion"
								className={`w-full p-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 rounded-lg focus:border focus:border-secondary-button text-colors ${
									formik.touched.descripcion && formik.errors.descripcion
										? 'border-red-500'
										: ''
								}`}
								placeholder="Descripción"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.descripcion}
							/>
							{formik.touched.descripcion && formik.errors.descripcion && (
								<div className="text-sm bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10">
									{formik.errors.descripcion}
								</div>
							)}
						</div>
					</div>

					{/* Botón */}
					<div className="flex justify-center">
						<button
							type="submit"
							className="w-full md:w-auto px-4 py-3 bg-transparent border-none shadow-2xl text-2xl font-bold shadow-violet-600 uppercase rounded-lg bg-secondary-button hover:text-gray-100 md:text-xl">
							Crear Regalo
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CrearRegalos;
