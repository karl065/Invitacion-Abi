import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { alertSuccess } from '../../../helpers/Alertas.jsx';
import { agregarRegalo } from '../../../redux/shared/actions/crearReagalo.jsx';
import { useDispatch } from 'react-redux';

const CrearRegalos = () => {
	const dispatch = useDispatch();

	const validationSchema = Yup.object({
		nombre: Yup.string().required('Nombre requerido'),
		descripcion: Yup.string().required('Descripcion requerida'),
	});

	const formik = useFormik({
		initialValues: {
			nombre: '',
			descripcion: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			agregarRegalo(values, dispatch);
			alertSuccess('Regalo creado con Exito');

			resetForm();
		},
	});

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
									name="descripcion"
									id="descripcion"
									className={`p-2 shadow-xl rounded-lg focus:border focus:border-secondary-button text-colors ${
										formik.touched.descripcion && formik.errors.descripcion
											? 'border-red-500'
											: ''
									}`}
									placeholder="Descripcion"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.descripcion}
								/>
								<div
									className={`text-xs bg-black border-2 rounded-lg p-2 text-red-500 absolute top-full z-10 ${
										formik.touched.descripcion && formik.errors.descripcion
											? 'visible'
											: 'hidden'
									}`}>
									{formik.errors.descripcion}
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-between h-full space-y-2">
						<div className="flex items-end justify-center">
							<button
								type="submit"
								className="p-2 font-bold shadow-xl uppercase transition-colors rounded-lg bg-secondary-button hover:text-gray-100">
								Crear Regalo
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CrearRegalos;
