import { useState } from 'react';
import Modal from 'react-modal';
import Asistencia from '../../../Formularios/Asistencia/Asistencia';
import StoryTimeline from '../../../Components/StoryTimeLine/StoryTimeLine';
import IconosFlotantes from '../../../Components/IconosFlotantes/IconosFlotantes';
import DetallesEvento from '../../../Components/DetallesEvento/DetallesEvento';

Modal.setAppElement('#root');

const Invitacion = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [iconType, setIconType] = useState('flowers');

	return (
		<div className="min-w-screen min-h-screen flex items-center font-tangerine justify-center ">
			{/* 👇 Flores o Esferas según el estado */}
			<IconosFlotantes type={iconType} />

			{/* 🔘 Botón para intercambiar */}
			<button
				onClick={() =>
					setIconType(iconType === 'flowers' ? 'dragonballs' : 'flowers')
				}
				className="fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 transition-transform transform hover:scale-110 bg-none">
				{iconType === 'flowers' ? (
					<img
						src="https://res.cloudinary.com/dpjeltekx/image/upload/v1755845450/InvitacionAbi/1_estrella_uljvfl.png"
						alt="Esfera del dragón"
						className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,165,0,0.9)]"
					/>
				) : (
					<span className="text-3xl animate-pulse drop-shadow-[0_0_10px_rgba(255,0,150,0.8)]">
						🌸
					</span>
				)}
			</button>

			<div className="bg-violet-300 rounded-2xl shadow-lg space-y-2 p-6 md:p-10 max-w-md w- border-4 border-pink-200 relative overflow-hidden">
				{/* Decoración de globos */}
				<div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>

				<div className="flex space-x-2 justify-center">
					{/* Historia dinámica (derecha → izquierda) */}
					<div className="shadow-2xl rounded-xl flex items-center justify-center">
						<StoryTimeline onFinishFirstLoop={() => setShowDetails(true)} />
					</div>
				</div>

				{showDetails && (
					<>
						<DetallesEvento />
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
