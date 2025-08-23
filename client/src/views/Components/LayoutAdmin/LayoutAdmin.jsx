import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';

const LayoutAdmin = () => {
	return (
		<div className="flex h-full">
			<div className="flex-1 flex flex-col min-w-screen">
				<NavBar />
				<main className="flex-1 overflow-auto p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default LayoutAdmin;
