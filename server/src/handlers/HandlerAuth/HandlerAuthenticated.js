import authenticatedUser from './../../services/auth/authenticatedUser.js';

const handlerAuthenticated = async (req, res) => {
	try {
		const { id } = req.user;

		const user = await authenticatedUser(id);
		return res.status(200).json(user);
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
};

export default handlerAuthenticated;
