import { SET_USER_DATA } from '../types';

const INITIAL_STATE = {
  isFirstLogin: true,
  isLoggedIn: false,
  cameraGranted: false
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.content,
      };
    default:
      return state;
  }
};
