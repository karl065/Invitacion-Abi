import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';

const LayoutAdmin = () => {
	return (
		<div className="flex min-h-screen w-screen max-w-screen ">
			<div className="flex-1 flex flex-col w-full">
				<NavBar />
				<main className="flex-1 overflow-auto p-4 w-full max-w-full">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default LayoutAdmin;
