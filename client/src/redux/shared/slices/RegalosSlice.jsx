import { createSlice } from '@reduxjs/toolkit';

const regalosSlice = createSlice({
	name: 'regalos',
	initialState: {
		regalos: [],
	},
	reducers: {
		cargarRegalos: (state, action) => {
			state.regalos = action.payload;
		},
		actualizarRegalos: (state, action) => {
			const nuevoRegalo = action.payload;

			// Verificar si ya existe en el estado
			const index = state.regalos.findIndex(
				(regalo) => regalo._id === nuevoRegalo._id
			);

			if (index !== -1) {
				// Si existe, actualiza
				state.regalos[index] = {
					...state.regalos[index],
					...nuevoRegalo,
				};
			} else {
				// Si no existe, lo agrega
				state.regalos.push(nuevoRegalo);
			}
		},
	},
});

export const { cargarRegalos, actualizarRegalos } = regalosSlice.actions;
export default regalosSlice.reducer;
