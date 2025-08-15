import { Link } from 'react-router-dom';
import {
	RiBarChartGroupedFill,
	RiContactsBookLine,
	RiPassValidLine,
	RiToolsFill,
	RiLogoutBoxRLine,
	RiHeadphoneLine,
} from 'react-icons/ri';

const Sidebar = () => {
	return (
		<div className="h-[100vh] shadow-xl p-2 flex flex-col rounded-2 bg-gradient-to-b from-violet-600 from-0% via-purple-400 via-50% to-violet-100 to-100% justify-between">
			<div>
				<h1 className="text-center text-2xl uppercase font-bold text-white mb-10">
					Invitación Abi
				</h1>
				<ul className="text-[14px]">
					<li>
						<Link
							to="/admin"
							className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-1000 transition-colors">
							<RiBarChartGroupedFill className="text-secondary-button" />{' '}
							Usuarios
						</Link>
					</li>
					<li>
						<Link
							to="/admin/proyectos"
							className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-1000 transition-colors">
							<RiContactsBookLine className="text-secondary-button" /> Crear
							Usuarios
						</Link>
					</li>
					<li>
						<Link
							to="/admin/tareas"
							className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-1000 transition-colors">
							<RiPassValidLine className="text-secondary-button" /> Regalos
						</Link>
					</li>
					<li>
						<Link
							to="/admin/documentos"
							className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-1000 transition-colors">
							<RiPassValidLine className="text-secondary-button" /> Crear
							Regalos
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
