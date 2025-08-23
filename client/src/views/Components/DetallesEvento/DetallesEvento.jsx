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
					<p className="mb-3 text-4xl font-bold">Domingo, 31 de agosto 2025</p>
				</div>
			</div>

			<div className="flex flex-col w-40 border-1 h-70 items-center justify-center border-pink-300 p-2">
				<h2>📍</h2>
				<p className="text-2xl font-bold text-pink-700"> Lugar</p>
				<a
					href="https://www.google.com/maps/place/Centro+Comercial+Unicentro+Girardot/@4.3090515,-74.7965393,16z/data=!4m6!3m5!1s0x8e3f28bc18c8ff01:0x6136782ac3e45c10!8m2!3d4.3074837!4d-74.7967857!16s%2Fg%2F11b8c2cb07?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer"
					className="mb-3 inline-block font-bold hover:text-pink-900 transition">
					{showAddress ? (
						<>
							<h2 className="text-3xl">Salón Social Los Almendros</h2>
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
