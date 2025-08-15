import { combineReducers } from '@reduxjs/toolkit';

//App Slices
import loadingReducer from './app/slices/loadingSlice.jsx';
import errorUsuariosReducer from './app/slices/errorSlices/errorUsuariosSlice.jsx';

//Admin Slices
import adminLoginReducer from './admin/slices/loginSlice.jsx';
import usuariosReducer from './admin/slices/usuariosSlice.jsx';

//Shared Slices
import regalosReducer from './shared/slices/RegalosSlice.jsx';

const rootReducer = combineReducers({
	//App Reducers
	loading: loadingReducer,
	errorUsuarios: errorUsuariosReducer,

	//Admin Reducers
	adminLogin: adminLoginReducer,
	usuarios: usuariosReducer,

	//Client Reducers

	//Shared Reducers
	regalos: regalosReducer,
});

export default rootReducer;
