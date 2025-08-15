const Invitacion = () => {
	return (
		<div className="min-w-screen min-h-screen flex items-center justify-center p-4">
			<div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-md w-full border-4 border-pink-200 relative overflow-hidden">
				{/* Decoración de globos */}
				<div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
				<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>

				{/* Encabezado */}
				<h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
					🌸 Bienvenida 🌸
				</h1>
				<h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
					🌸 Princesa Abi 🌸
				</h1>

				{/* Texto principal */}
				<p className="text-gray-700 mb-6">
					Con mucho amor y alegría, te invitamos a celebrar la llegada de
					nuestra hermosa bebé. Ella nació antes de lo esperado, pero llena de
					fuerza y ternura. 💖
				</p>

				{/* Detalles del evento */}
				<div className="bg-pink-100 p-4 rounded-xl shadow-inner mb-6">
					<p className="text-lg font-semibold text-pink-700">📅 Fecha:</p>
					<p className="mb-3">Domingo, 25 de agosto 2025</p>

					<p className="text-lg font-semibold text-pink-700">📍 Lugar:</p>
					<p className="mb-3">Salón Social Los Almendros</p>

					<p className="text-lg font-semibold text-pink-700">⏰ Hora:</p>
					<p>3:00 PM</p>
				</div>

				{/* Mensaje final */}
				<p className="text-sm text-gray-500 italic mb-4">
					“Un pedacito de cielo llegó a nuestras vidas.”
				</p>

				{/* Botón de confirmación */}
				<a
					href="https://wa.me/573124868390"
					target="_blank"
					className="inline-block bg-pink-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-pink-600 transition">
					Confirmar asistencia 💌
				</a>
			</div>
		</div>
	);
};

export default Invitacion;
