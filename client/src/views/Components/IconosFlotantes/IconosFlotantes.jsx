import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const urls = [
	'https://res.cloudinary.com/dpjeltekx/image/upload/v1755845450/InvitacionAbi/1_estrella_uljvfl.png',
	'https://res.cloudinary.com/dpjeltekx/image/upload/v1755845450/InvitacionAbi/2_estrellas_nueva_jdayyw.png',
	'https://res.cloudinary.com/dpjeltekx/image/upload/v1755850963/InvitacionAbi/3_estrellas_nueva_nrhcr0.png',
	'https://res.cloudinary.com/dpjeltekx/image/upload/v1755844676/InvitacionAbi/4_estrellas_h16jti.png',
	'https://res.cloudinary.com/dpjeltekx/image/upload/v1755845454/InvitacionAbi/5_estrellas_vjjnzp.png',
	'https://res.cloudinary.com/dpjeltekx/image/upload/v1755845454/InvitacionAbi/6_estrellas_ycmlos.png',
	'https://res.cloudinary.com/dpjeltekx/image/upload/v1755845456/InvitacionAbi/7_estrellas_qts0bv.png',
];

const MIN_SPEED = 1.5; // velocidad mínima para que nunca se frenen

const IconosFlotantes = ({ type = 'flowers' }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		const sources = type === 'flowers' ? Array(7).fill('🌸') : urls;

		const initial = sources.map((src, i) => ({
			id: i,
			x: Math.random() * (width - 60),
			y: Math.random() * (height - 60),
			vx: (Math.random() - 0.5) * 5,
			vy: (Math.random() - 0.5) * 5,
			src,
		}));

		setItems(initial);

		let animationFrame;

		const update = () => {
			setItems((prev) =>
				prev.map((e1, i) => {
					let { x, y, vx, vy } = e1;
					const radius = 30;

					x += vx;
					y += vy;

					// Rebote contra paredes
					if (x <= 0 || x >= width - radius * 2) vx *= -1;
					if (y <= 0 || y >= height - radius * 2) vy *= -1;

					// Chequeo colisiones con otros
					prev.forEach((e2, j) => {
						if (i !== j) {
							const dx = e2.x - x;
							const dy = e2.y - y;
							const dist = Math.sqrt(dx * dx + dy * dy);
							if (dist < radius * 2) {
								[vx, e2.vx] = [e2.vx, vx];
								[vy, e2.vy] = [e2.vy, vy];
							}
						}
					});

					// Nunca permitir que se queden quietos
					if (Math.abs(vx) < MIN_SPEED) vx = Math.sign(vx || 1) * MIN_SPEED;
					if (Math.abs(vy) < MIN_SPEED) vy = Math.sign(vy || 1) * MIN_SPEED;

					return { ...e1, x, y, vx, vy };
				})
			);

			animationFrame = requestAnimationFrame(update);
		};

		update();
		return () => cancelAnimationFrame(animationFrame);
	}, [type]);

	return (
		<div className="fixed inset-0 pointer-events-none z-50">
			{items.map((item) => (
				<motion.div
					key={item.id}
					className="absolute"
					animate={{
						scale: [1, 1.3, 1],
						rotate: [0, 10, -10, 0],
					}}
					transition={{
						duration: 1.8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					style={{
						left: item.x,
						top: item.y,
					}}>
					{type === 'flowers' ? (
						<span className="text-4xl animate-pulse drop-shadow-[0_0_10px_rgba(255,0,150,0.8)]">
							{item.src}
						</span>
					) : (
						<img
							src={item.src}
							alt={`Esfera ${item.id + 1}`}
							className="w-12 h-12 animate-pulse"
							style={{
								filter:
									'drop-shadow(0 0 12px rgba(255,165,0,0.9)) drop-shadow(0 0 25px rgba(255,100,0,0.6))',
							}}
						/>
					)}
				</motion.div>
			))}
		</div>
	);
};

export default IconosFlotantes;
