import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import angeles from '../../../audios/angeles_fuimos.mp3';
import escena1 from '../../../audios/Escena1.mp3';
import escena2 from '../../../audios/Escena2.mp3';
import escena3 from '../../../audios/Escena3.mp3';
import escena4 from '../../../audios/Escena4.mp3';
import escena5 from '../../../audios/Escena5.mp3';
import escena6 from '../../../audios/Escena6.mp3';

const storyEvents = [
	{
		title: 'Bienvenida',
		cardTitle: 'Princesa Abi',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755836723/InvitacionAbi/Bra_bebe_en_la_nube_voladora_kr0rig.png',
			},
		},
		narration: escena1,
	},
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
		narration: escena2,
	},
	{
		title: 'La batalla en la incubadora',
		cardTitle: 'Fuerza Saiyajin',
		cardSubtitle: 'Días de recuperación',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755839149/InvitacionAbi/Bra_guerrera_ki_rosado_ioc74u.png',
			},
		},
		story:
			'Enfrentó cada día en la incubadora como un entrenamiento en la sala del tiempo, fortaleciendo su espíritu.',
		narration: escena3,
	},
	{
		title: '¡Victoria!',
		cardTitle: '¡La guerrera sale adelante!',
		cardSubtitle: 'Alta médica',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755838210/InvitacionAbi/Bra_victoria_editada_cvy1e3.png',
			},
		},
		story:
			'¡Después de días de batalla, nuestra pequeña Saiyajin logró lo imposible: ir a casa con nosotros!',
		narration: escena4,
	},
	{
		title: 'En casa',
		cardTitle: 'Nuestra princesa Saiyajin',
		cardSubtitle: 'La unión familiar',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755840580/InvitacionAbi/Bra_en_familia_sin_fondo_union_u3kueu.png',
			},
		},
		story:
			'Ahora, con su armadura invisible y su poder oculto, nos llena de amor y orgullo cada día.',
		narration: escena5,
	},
	{
		title: 'Estas Invitad@',
		cardTitle: 'A compartir con mis papitos',
		cardSubtitle: 'La gran bendición de mi bienvenida',
		media: {
			type: 'IMAGE',
			source: {
				url: 'https://res.cloudinary.com/dpjeltekx/image/upload/v1755836723/InvitacionAbi/Bra_bebe_sin_fondo_ypkl9l.png',
			},
		},
		story:
			'Acompáñalos a disfrutar de este gran día, en donde celebran mi ¡Victoria!, Ellos te esperan, Confirma enseguida...',
		narration: escena6,
	},
];

const positions = ['text-first', 'image-first'];

const StoryTimeline = ({ onFinishFirstLoop }) => {
	const [index, setIndex] = useState(0);
	const [position, setPosition] = useState('image-first');
	const [hasCompletedFirstLoop, setHasCompletedFirstLoop] = useState(false);
	const [finished, setFinished] = useState(false);
	const [narrationStarted, setNarrationStarted] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	const audioRef = useRef(null);
	const narrationRef = useRef(null);

	// Audio de fondo en loop
	useEffect(() => {
		if (narrationStarted && audioRef.current) {
			audioRef.current.volume = 0.2;
			audioRef.current.play().catch(() => setIsPlaying(false));
		}
	}, [narrationStarted]);

	// Control de narración y avance automático
	useEffect(() => {
		if (!narrationStarted) return;
		if (!storyEvents[index].narration) return;

		const audio = narrationRef.current;
		audio.src = storyEvents[index].narration;
		audio.volume = 1.0;
		audio.play().catch(() => {});

		const handleEnded = () => {
			setIndex((prevIndex) => {
				if (prevIndex < storyEvents.length - 1) {
					const nextIndex = prevIndex + 1;
					setPosition(positions[Math.floor(Math.random() * positions.length)]);

					if (!hasCompletedFirstLoop && nextIndex === storyEvents.length - 1) {
						setHasCompletedFirstLoop(true);
						if (onFinishFirstLoop) onFinishFirstLoop();
					}

					return nextIndex;
				} else {
					setFinished(true);
					return prevIndex;
				}
			});
		};

		audio.addEventListener('ended', handleEnded);
		return () => audio.removeEventListener('ended', handleEnded);
	}, [index, narrationStarted, hasCompletedFirstLoop, onFinishFirstLoop]);

	const toggleAudio = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	const startNarration = () => {
		setNarrationStarted(true);
	};

	const current = storyEvents[index];

	const TextContent = () => {
		if (finished) return null;
		return (
			<motion.div
				key={index + position}
				className="max-w-xs md:max-w-md text-center p-3 mx-auto"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -30 }}
				transition={{ duration: 1.5 }}>
				<div className="flex items-center justify-center">
					<h2 className="text-6xl md:text-5xl font-bold mb-2 text-pink-400 text-shadow-fuchsia-700">
						{current.title}
					</h2>
				</div>
				<div className="flex items-center justify-center">
					<h3 className="text-5xl md:text-4xl mb-1 text-pink-600">
						{current.cardTitle}
					</h3>
				</div>
				{current.cardSubtitle && (
					<h4 className="text-5xl md:text-5xl mb-2 text-violet-600">
						{current.cardSubtitle}
					</h4>
				)}
				{current.story && (
					<p className="text-5xl md:text-5xl font-bold text-violet-500">
						{current.story}
					</p>
				)}
			</motion.div>
		);
	};

	const ImageContent = () => (
		<motion.div
			key={current.media.source.url}
			className="w-full max-w-md h-64 overflow-hidden rounded-xl shadow-md flex items-center justify-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}>
			<img
				src={current.media.source.url}
				alt={current.cardTitle}
				className="w-full h-full object-contain rounded-xl"
			/>
		</motion.div>
	);

	return (
		<>
			<audio ref={audioRef} src={angeles} loop />
			<audio ref={narrationRef} />

			<div className="flex flex-col items-center justify-center gap-4">
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

				{!narrationStarted && (
					<button
						className=" bg-pink-500 text-4xl p-2 text-white rounded-lg shadow hover:bg-pink-600 transition"
						onClick={startNarration}>
						Inicia la aventura
					</button>
				)}
			</div>

			<button
				className="fixed top-4 right-4 z-50 p-3 rounded-full bg-black/60 text-white shadow-lg hover:bg-black/80 transition"
				onClick={toggleAudio}>
				{isPlaying ? '⏸ Pausar música' : '▶ Reproducir música'}
			</button>
		</>
	);
};

export default StoryTimeline;
