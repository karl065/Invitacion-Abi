import { combineReducers } from '@reduxjs/toolkit';

//App Slices

//Admin Slices
import adminLoginReducer from './admin/slices/loginSlice.jsx';
import usuariosReducer from './admin/slices/usuariosSlice.jsx';

const rootReducer = combineReducers({
	//App Reducers

	//Admin Reducers
	adminLogin: adminLoginReducer,
	usuarios: usuariosReducer,

	//Client Reducers

	//Shared Reducers
});

export default rootReducer;
