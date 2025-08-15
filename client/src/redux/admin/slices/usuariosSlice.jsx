import { createSlice } from '@reduxjs/toolkit';

const usuariosSlice = createSlice({
	name: 'usuarios',
	initialState: {
		usuarios: [],
	},
	reducers: {
		cargarUsuarios: (state, action) => {
			state.usuarios = action.payload;
		},
		actualizarUsuario: (state, action) => {
			const nuevoUsuario = action.payload;

			// Verificar si ya existe en el estado
			const index = state.usuarios.findIndex(
				(usuario) => usuario._id === nuevoUsuario._id
			);

			if (index !== -1) {
				// Si existe, actualiza
				state.usuarios[index] = {
					...state.usuarios[index],
					...nuevoUsuario,
				};
			} else {
				// Si no existe, lo agrega
				state.usuarios.push(nuevoUsuario);
			}
		},
	},
});

export const { cargarUsuarios, actualizarUsuario } = usuariosSlice.actions;
export default usuariosSlice.reducer;
