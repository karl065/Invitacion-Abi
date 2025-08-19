import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StoryTimeline = ({
	mensajes = [],
	delay = 3000, // tiempo entre mensajes
	direction = 'rtl', // "rtl" (derecha→izquierda) o "ltr"
	autoPlay = true,
	pauseOnHover = true,
	className = '',
}) => {
	const [index, setIndex] = useState(0);
	const timerRef = useRef(null);

	const hasMessages = Array.isArray(mensajes) && mensajes.length > 0;
	if (!hasMessages) return null;

	const startX = direction === 'rtl' ? '100%' : '-100%';
	const exitX = direction === 'rtl' ? '-100%' : '100%';

	const startAuto = () => {
		if (!autoPlay || mensajes.length <= 1) return;
		clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setIndex((prev) => (prev + 1) % mensajes.length);
		}, delay);
	};

	const stopAuto = () => {
		clearInterval(timerRef.current);
	};

	useEffect(() => {
		startAuto();
		return () => stopAuto();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [delay, autoPlay, mensajes.length]);

	const handleMouseEnter = () => pauseOnHover && stopAuto();
	const handleMouseLeave = () => pauseOnHover && startAuto();

	return (
		<div
			className={`h-28 md:h-32 flex items-center justify-center overflow-hidden ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<AnimatePresence mode="wait">
				<motion.p
					key={index}
					initial={{ x: startX, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: exitX, opacity: 0 }}
					transition={{ duration: 0.9 }}
					className="text-center text-lg md:text-xl text-gray-700 font-semibold px-4">
					{mensajes[index]}
				</motion.p>
			</AnimatePresence>

			{/* Controles opcionales (prev/next) */}
			<div className="absolute inset-x-0 bottom-1 flex items-center justify-center gap-2">
				{mensajes.map((_, i) => (
					<button
						key={i}
						aria-label={`Mensaje ${i + 1}`}
						onClick={() => setIndex(i)}
						className={`w-2.5 h-2.5 rounded-full transition ${
							i === index ? 'bg-pink-500 scale-110' : 'bg-pink-200'
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default StoryTimeline;
