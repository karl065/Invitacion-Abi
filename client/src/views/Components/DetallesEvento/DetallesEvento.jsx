import { useState, useEffect } from 'react';

const DetallesEvento = () => {
	const [showAddress, setShowAddress] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowAddress((prev) => !prev);
		}, 5000); // alterna cada 5s
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex items-center w-full justify-center p-4 rounded-xl shadow-2xl mb-6 bg-none">
			<div dir="ltr">
				<div className="flex flex-col w-25 border-1 border-pink-300 h-70 items-center justify-center p-2 rounded-s-2xl">
					<h2>📅</h2>
					<p className="text-2xl font-bold text-pink-700"> Fecha</p>
					<p className="mb-3 text-4xl font-bold">Sábado, 30 de agosto 2025</p>
				</div>
			</div>

			<div className="flex flex-col w-40 border-1 h-70 items-center justify-center border-pink-300 p-2">
				<h2>📍</h2>
				<p className="text-2xl font-bold text-pink-700"> Lugar</p>
				<a
					href="https://maps.app.goo.gl/4KXgNEjt6DMu7meV9?g_st=awb"
					target="_blank"
					rel="noopener noreferrer"
					className="mb-3 inline-block font-bold hover:text-pink-900 transition">
					{showAddress ? (
						<>
							<h2 className="text-3xl">Salón Comunal Barrio el Triunfo</h2>
						</>
					) : (
						<>
							<h2>👇</h2>
							<h2 className="text-4xl"> Ver ubicación</h2>
						</>
					)}
				</a>
			</div>
			<div dir="rtl">
				<div className="flex flex-col w-25 items-center justify-center border-1 h-70 border-pink-300 p-2 rounded-s-2xl">
					<h2>⏰</h2>
					<p className="text-2xl font-bold text-pink-700">Hora</p>
					<p className="text-4xl font-bold">4:00 PM</p>
				</div>
			</div>
		</div>
	);
};

export default DetallesEvento;
