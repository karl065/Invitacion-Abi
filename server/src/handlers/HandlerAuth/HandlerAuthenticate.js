import authenticateUser from './../../services/auth/authenticateUser.js';

const handlerAuthenticate = async (req, res) => {
	try {
		const { email, password } = req.body;

		const token = await authenticateUser(email, password);

		return res.status(200).json(token);
	} catch (error) {
		console.log(error);
		return res.status(401).json(error);
	}
};

export default handlerAuthenticate;
