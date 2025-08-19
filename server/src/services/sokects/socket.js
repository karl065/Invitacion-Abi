const socket = (io) => {
	io.on('connection', async (socket) => {
		socket.on('joinRoom', async (room) => {
			socket.join(room);
			console.log(
				`Usuario con ID: ${socket.id} se ha unido a la sala: ${room}`
			);
		});
		socket.on('disconnect', () => {
			console.log(`El cliente ${socket.id} se ha desconectado.`);
		});
	});
};

export default socket;
