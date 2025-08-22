import { useState } from 'react';
import Modal from 'react-modal';
import Asistencia from '../../../Formularios/Asistencia/Asistencia';
import StoryTimeline from '../../../Components/StoryTimeLine/StoryTimeLine';

Modal.setAppElement('#root');

const Invitacion = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="min-w-screen min-h-screen flex items-center justify-center ">
			<div className="bg-violet-300 rounded-2xl shadow-lg space-y-2 p-6 md:p-10 max-w-md w- border-4 border-pink-200 relative overflow-hidden">
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
				<div className="flex space-x-2">
					{/* Historia dinámica (derecha → izquierda) */}
					<div className="shadow-2xl rounded-xl">
						<StoryTimeline onFinishFirstLoop={() => setShowDetails(true)} />
					</div>
				</div>

				{showDetails && (
					<>
						<div className="flex ">
							{/* Detalles del evento */}
							<div className="flex p-4 rounded-xl shadow-2xl mb-6">
								<div>
									<p className="text-lg font-semibold text-pink-700">
										📅 Fecha:
									</p>
									<p className="mb-3">Domingo, 25 de agosto 2025</p>
								</div>
								<div>
									<p className="text-lg font-semibold text-pink-700">
										📍 Lugar:
									</p>
									<p className="mb-3">Salón Social Los Almendros</p>
								</div>
								<div>
									<p className="text-lg font-semibold text-pink-700">
										⏰ Hora:
									</p>
									<p>3:00 PM</p>
								</div>
							</div>
						</div>
						{/* Mensaje final */}
						<p className="text-sm text-gray-500 italic mb-4">
							“Un pedacito de cielo llegó a nuestras vidas.”
						</p>
						{/* Botón de confirmación */}
						<button
							onClick={() => setIsOpen(true)}
							className="inline-block bg-pink-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-pink-600 transition">
							Confirmar asistencia 💌
						</button>
					</>
				)}
				{isOpen && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="bg-rose-200 rounded-2xl shadow-2xl p-4 w-[90%] max-w-lg relative">
							{/* Botón cerrar */}
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold">
								✕
							</button>

							{/* Aquí va tu formulario Asistencia */}
							<Asistencia onClose={() => setIsOpen(false)} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Invitacion;
