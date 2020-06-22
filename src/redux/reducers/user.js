import { SET_USER_DATA } from '../types';
import { AppStorage } from '../../services/app-storage.service';

const INITIAL_STATE = {
  isFirstLogin: AppStorage.getIsFirstTime().then(result => result) === false ? false : true,
  isLoggedIn: false,
  cameraGranted: AppStorage.getCameraPermission().then(result => result) === true ? true : false
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
