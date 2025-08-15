import { useSelector } from 'react-redux';
import Tabla from '../../../Components/Tabla/Tabla';

const RegalosAdmin = () => {
	const regalos = useSelector((state) => state.regalos.regalos);

	const columns = [
		{
			header: 'Nombre',
			accessorKey: 'nombre',
		},
		{
			header: 'Descripción',
			accessorKey: 'descripcion',
		},
		{
			header: 'Seleccionado',
			accessorKey: 'seleccionado',
		},
		{
			header: 'Encargado',
			accessorFn: (row) =>
				row.usuarioEncargado
					? `${row.usuarioEncargado.nombre} ${row.usuarioEncargado.apellido}`
					: 'Sin asignar',
		},
	];

	return (
		<div className="w-full h-full p-2">
			<div className=" rounded-lg p-3 x-2 items-center">
				<h1 className="mb-2 border-gray-100 uppercase text-gray-100">
					Lista de Regalos
				</h1>
				<hr className="mb-2"></hr>
				<Tabla
					columns={columns}
					data={regalos}
					className="max-h-[500px]"
					firstRowClass="text-violet-300"
				/>{' '}
			</div>
		</div>
	);
};

export default RegalosAdmin;
