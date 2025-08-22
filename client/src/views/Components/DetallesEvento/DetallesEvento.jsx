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
		<div className="flex p-4 rounded-xl shadow-2xl mb-6 bg-white/40 backdrop-blur-sm">
			<div className="flex-1">
				<p className="text-lg font-semibold text-pink-700">📅 Fecha:</p>
				<p className="mb-3">Domingo, 31 de agosto 2025</p>
			</div>

			<div className="flex-1">
				<p className="text-lg font-semibold text-pink-700">📍 Lugar:</p>
				<a
					href="https://www.google.com/maps/place/Centro+Comercial+Unicentro+Girardot/@4.3090515,-74.7965393,16z/data=!4m6!3m5!1s0x8e3f28bc18c8ff01:0x6136782ac3e45c10!8m2!3d4.3074837!4d-74.7967857!16s%2Fg%2F11b8c2cb07?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer"
					className="mb-3 inline-block text-pink-700 font-semibold underline hover:text-pink-900 transition">
					{showAddress
						? 'Salón Social Los Almendros'
						: '👉 Da click para ir a Google Maps'}
				</a>
			</div>

			<div className="flex-1">
				<p className="text-lg font-semibold text-pink-700">⏰ Hora:</p>
				<p>4:00 PM</p>
			</div>
		</div>
	);
};

export default DetallesEvento;
