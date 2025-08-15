import { Link, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {
	RiArrowDownSLine,
	RiLogoutBoxRLine,
	RiNotification3Line,
	RiSettings3Line,
} from 'react-icons/ri';
import { FaGifts, FaUserPlus, FaUsers } from 'react-icons/fa';
import { IoGiftSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogoutAction } from '../../../redux/admin/actions/adminLogoutAction.jsx';

const NavBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const login = useSelector((state) => state.adminLogin.login);

	const handleLogout = () => {
		adminLogoutAction(dispatch, navigate);
	};
	return (
		<div className="border-gray-400 bg-gradient-to-r from-violet-500 from- via-purple-400 via-  flex shadow-lg items-center justify-end">
			<nav className="flex items-center p-2 gap-x-2">
				<Menu
					menuButton={
						<MenuButton
							className={
								'flex items-center gap-x-2 hover:bg-cyan-200 py-2  px-4 rounded-lg transition-colors'
							}>
							<span className="text-violet-500 uppercase hover:text-black">
								{login?.nombre}
							</span>
							<RiArrowDownSLine />
						</MenuButton>
					}
					transition
					menuClassName=" p-4">
					<MenuItem className="text-violet-500 transition-colors hover:text-black hover:bg-gradient-to-r from-violet-500 from- via-purple-400 via-">
						<Link to="/registro" className="flex items-center gap-x-4">
							<div className="flex flex-col gap-1 text-sm">
								<span className="text-sm">{login.nombre}</span>
								<span className="text-[10px] text-violet-500 hover:text-black">
									{login.email}
								</span>
							</div>
						</Link>
					</MenuItem>
					<hr className="my-3 border-gray-500"></hr>
					<MenuItem className="text-violet-500 transition-colors hover:text-black hover:bg-gradient-to-r from-violet-500 from- via-purple-400 via-">
						<Link to="/admin" className="flex items-center gap-x-4">
							<FaUsers className="rounded-full " />
							Usuarios
						</Link>
					</MenuItem>
					<hr className="my-3 border-gray-500"></hr>
					<MenuItem className="text-violet-500 transition-colors hover:text-black hover:bg-gradient-to-r from-violet-500 from- via-purple-400 via-">
						<Link
							to="/admin/crearUsuario"
							className="flex items-center gap-x-4">
							<FaUserPlus className="rounded-full " />
							Crear Usuarios
						</Link>
					</MenuItem>
					<hr className="my-3 border-gray-500"></hr>
					<MenuItem className="text-violet-500 transition-colors hover:text-black hover:bg-gradient-to-r from-violet-500 from- via-purple-400 via-">
						<Link to="/admin/regalos" className="flex items-center gap-x-4">
							<IoGiftSharp className="rounded-full " />
							Regalos
						</Link>
					</MenuItem>
					<hr className="my-3 border-gray-500"></hr>
					<MenuItem className="text-violet-500 transition-colors hover:text-black hover:bg-gradient-to-r from-violet-500 from- via-purple-400 via-">
						<Link to="/admin/crearRegalo" className="flex items-center gap-x-4">
							<FaGifts className="rounded-full " />
							Crear Regalos
						</Link>
					</MenuItem>
					<hr className="my-3 border-gray-500"></hr>
					<MenuItem className="text-gray-300 transition-colors hover:text-black hover:bg-gradient-to-r from-violet-500 from- via-purple-400 via-">
						<button
							className="flex text-violet-500 hover:text-black items-center gap-x-4"
							onClick={handleLogout}>
							<RiLogoutBoxRLine />
							Cerrar Sesión
						</button>
					</MenuItem>
				</Menu>
			</nav>
		</div>
	);
};

export default NavBar;
