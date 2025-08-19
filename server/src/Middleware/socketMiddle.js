import { io } from '../server.js';

const socketMiddle = (req, res, next) => {
	req.io = io;
	next();
};

export default socketMiddle;
