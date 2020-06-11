import { combineReducers } from 'redux';
import user from './user';
import creategroup from './creategroup';
import pmallocation from './pm-allocation';
import inputvalidator from './input-validator';
import notification from './notification';
import projects from './project-reassignment';
import prj from './prj_reassignment'
import emailDowntime from './emailDowntime';
import translator from './translator';

const rootReducer = combineReducers({
	user,
	creategroup,
	pmallocation,
	inputvalidator,
	notification,
    projects,
	prj,
	emailDowntime,
	translator
});

export default rootReducer;
