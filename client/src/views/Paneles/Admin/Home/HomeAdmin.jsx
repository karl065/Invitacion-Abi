import { useSelector } from 'react-redux';
import Tabla from '../../../Components/Tabla/Tabla';

const HomeAdmin = () => {
	const usuarios = useSelector((state) => state.usuarios.usuarios);

	console.log(usuarios);

	const columns = [
		{
			header: 'Nombre',
			accessorKey: 'nombre',
		},
		{
			header: 'Apellido',
			accessorKey: 'apellido',
		},
		{
			header: 'Email',
			accessorKey: 'email',
		},
		{
			header: 'Celular',
			accessorKey: 'celular',
		},
		{
			header: 'Asistencia',
			accessorKey: 'asistencia',
			cell: ({ getValue }) => (getValue() ? 'Sí' : 'No'),
		},
		{
			header: 'Regalo',
			accessorFn: (row) => row.regalos?.nombre || '—',
		},
	];

	return (
		<div className="w-full h-full p-2">
			<div className="bg-secondary-fondo rounded-lg p-3 x-2 items-center">
				<h1 className="mb-2 border-gray-100 text-gray-100">
					Lista de invitados
				</h1>
				<hr className="mb-2"></hr>
				<Tabla
					columns={columns}
					data={usuarios}
					className="max-h-[500px]"
					firstRowClass="text-violet-300"
				/>{' '}
			</div>
		</div>
	);
};

export default HomeAdmin;
