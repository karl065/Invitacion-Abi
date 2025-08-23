import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';

const LayoutAdmin = () => {
	return (
		<div className="flex max-h-screen max-w-screen ">
			<div className="flex-1 flex flex-col w-full">
				<NavBar />
				<main className="flex-1 max-h-full overflow-auto p-4 max-w-full">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default LayoutAdmin;
