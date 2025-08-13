import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Invitacion } from './views/Paneles/Client/indexClient.jsx';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Invitacion />} />
			</Routes>
		</div>
	);
}

export default App;
