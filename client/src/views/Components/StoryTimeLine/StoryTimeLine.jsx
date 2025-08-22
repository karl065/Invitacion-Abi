// StoryTimeline.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import angeles from '../../../audios/angeles_fuimos.mp3';

const storyEvents = [
	{
		title: 'El inicio',
		cardTitle: 'Una guerrera nace',
		cardSubtitle: 'Semana 28 - Llegada inesperada',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755641395/InvitacionAbi/Bra_en_la_encubadora_xrwste.png',
			},
		},
		story:
			'Como toda guerrera Saiyajin, llegó antes de lo esperado, lista para luchar por su vida.',
	},
	{
		title: 'La batalla en la incubadora',
		cardTitle: 'Fuerza Saiyajin',
		cardSubtitle: 'Días de recuperación',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755646632/InvitacionAbi/Bra_Guerrera_bebe_sin_fondo_zjoqgr.png',
			},
		},
		story:
			'Enfrentó cada día en la incubadora como un entrenamiento en la sala del tiempo, fortaleciendo su espíritu.',
	},
	{
		title: 'Victoria',
		cardTitle: 'La guerrera sale adelante',
		cardSubtitle: 'Alta médica',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755646809/InvitacionAbi/Bra_victoria_sin_fondo_svxug3.png',
			},
		},
		story:
			'Después de días de batalla, nuestra pequeña Saiyajin logró lo imposible: ir a casa con nosotros.',
	},
	{
		title: 'En casa',
		cardTitle: 'Nuestra princesa Saiyajin',
		cardSubtitle: 'La unión familiar',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755641394/InvitacionAbi/Bra_en_familia_zauwz3.png',
			},
		},
		story:
			'Ahora, con su armadura invisible y su poder oculto, nos llena de amor y orgullo cada día.',
	},
];

const positions = ['text-first', 'image-first'];

const StoryTimeline = ({ onFinishFirstLoop }) => {
	const [index, setIndex] = useState(0);
	const [position, setPosition] = useState('image-first');
	const [hasCompletedFirstLoop, setHasCompletedFirstLoop] = useState(false);

	// Ref para el audio
	const audioRef = useRef(null);
	const [showPlayButton, setShowPlayButton] = useState(false);

	useEffect(() => {
		// Intentar reproducir automáticamente
		if (audioRef.current) {
			audioRef.current.play().catch(() => {
				setShowPlayButton(true); // Mostrar botón si el navegador bloquea autoplay
			});
		}

		const interval = setInterval(() => {
			setIndex((prev) => {
				const next = (prev + 1) % storyEvents.length;

				// Si termina la vuelta por primera vez
				if (next === 0 && !hasCompletedFirstLoop) {
					setHasCompletedFirstLoop(true);
					if (onFinishFirstLoop) onFinishFirstLoop(); // Avisar al padre
				}

				return next;
			});

			const randomPos = positions[Math.floor(Math.random() * positions.length)];
			setPosition(randomPos);
		}, 10000);

		return () => clearInterval(interval);
	}, [hasCompletedFirstLoop, onFinishFirstLoop]);

	const handlePlayAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
			setShowPlayButton(false); // Ocultar botón al reproducir
		}
	};

	const current = storyEvents[index];

	// Componente de texto animado
	const TextContent = () => (
		<motion.div
			key={index + position}
			className="max-w-xs md:max-w-md text-center text-white p-3 mx-auto"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -30 }}
			transition={{ duration: 1.5 }}>
			<h2 className="text-lg md:text-2xl font-bold mb-2 text-pink-400 text-shadow-fuchsia-700">
				{current.title}
			</h2>
			<h3 className="text-base md:text-xl mb-1 text-pink-600">
				{current.cardTitle}
			</h3>
			<h4 className="text-sm md:text-lg mb-2 text-violet-600">
				{current.cardSubtitle}
			</h4>
			<p className="text-xs md:text-sm text-violet-500">{current.story}</p>
		</motion.div>
	);

	// Componente de imagen animada
	const ImageContent = () => (
		<motion.div
			key={current.media.source.url}
			className="w-full max-w-md h-64 overflow-hidden rounded-xl shadow-md flex items-center justify-center " // 👈 fuerza mismo tamaño
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}>
			<img
				src={current.media.source.url}
				alt={current.cardTitle}
				className="w-full h-full object-contain rounded-xl " // 👈 fondo relleno sutil
			/>
		</motion.div>
	);

	return (
		<>
			{/* Audio */}
			<audio ref={audioRef} src={angeles} loop />

			{/* Botón para reproducir si autoplay falla */}
			{showPlayButton && (
				<div className="text-center mb-4">
					<button
						className="fixed top-4 right-4 z-50 p-3 rounded-full bg-black/60 text-white shadow-lg hover:bg-black/80 transition"
						onClick={handlePlayAudio}>
						▶ Escuchar música
					</button>
				</div>
			)}

			<AnimatePresence mode="wait">
				<div key={index} className="flex flex-col items-center gap-4">
					{position === 'text-first' ? (
						<>
							<TextContent />
							<ImageContent />
						</>
					) : (
						<>
							<ImageContent />
							<TextContent />
						</>
					)}
				</div>
			</AnimatePresence>
		</>
	);
};

export default StoryTimeline;
