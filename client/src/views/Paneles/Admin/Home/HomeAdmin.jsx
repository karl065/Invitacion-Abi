import { useSelector } from 'react-redux';
import Tabla from '../../../Components/Tabla/Tabla';

const HomeAdmin = () => {
	const usuarios = useSelector((state) => state.usuarios.usuarios);

	const columns = [
		{ header: 'Nombre', accessorKey: 'nombre' },
		{ header: 'Apellido', accessorKey: 'apellido' },
		{ header: 'Email', accessorKey: 'email' },
		{ header: 'Celular', accessorKey: 'celular' },
		{
			header: 'Asistencia',
			accessorKey: 'asistencia',
			cell: ({ getValue }) => (getValue() ? 'Sí' : 'No'),
		},
		{
			header: 'Acompañado',
			accessorKey: 'solo',
			cell: ({ getValue }) => (getValue() ? 'No' : 'Sí'),
		},
		{ header: 'Acompañantes', accessorKey: 'acompanantes' },
		{ header: 'Regalo', accessorFn: (row) => row.regalos?.nombre || '—' },
	];

	return (
		<div className="p-2 max-w-screen">
			<div className="rounded-lg p-3 px-2">
				<h1 className="mb-2 text-gray-100 truncate">Lista de invitados</h1>
				<hr className="mb-2" />

				{/* Contenedor con scroll horizontal */}
				<div className="wrap-anywhere md:flex md:justify-center overflow-x-auto">
					{/* Fuerza ancho mínimo en móvil para activar el scroll */}
					<div className="min-w-[390px] md:min-w-0 flex justify-center ">
						<Tabla
							columns={columns}
							data={usuarios}
							className="max-h-[60vh]"
							firstRowClass="text-violet-300"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAdmin;
