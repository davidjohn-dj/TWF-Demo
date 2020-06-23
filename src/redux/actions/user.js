import axios from 'axios';
import { SET_USER_DATA } from '../types';
import CONFIG from './../../../app.json';
import { AppStorage } from '../../services/app-storage.service';
import Toast, { DURATION } from 'react-native-easy-toast';

const baseURL = CONFIG.API_HOST;

export function setUserData(content) {
  return {
    type: SET_USER_DATA,
    content,
  };
}

export function getFirstTime() {
  return async (dispatch) => {
    return await AppStorage.getIsFirstTime().then(result => {
      if (result) {
        result = JSON.parse(result);
        dispatch(setUserData({
          isFirstLogin: result
        }));
      }
      return result;
    });
  }
}

export function getCamera() {
  return async (dispatch) => {
    return await AppStorage.getCameraPermission().then(result => {
      if (result) {
        result = JSON.parse(result);
        dispatch(setUserData({
          cameraGranted: result
        }));
      }
      return result;
    });
  }
}

export function getUserInfo(data) {
  const config = {
    body: {
      username: data.email,
      password: data.password
    },
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ''
    }
  };
  return (dispatch) => {
    return axios.post(baseURL + '/user-login', config).then((response) => {
      if (response.data.body) {
        dispatch(setUserData({
          userId: response.data.body.id,
          userName: response.data.body.userName,
          userRole: response.data.body.userRole,
          preferredUserName: response.data.body.preferredUserName,
          isProjectExist: response.data.body.isProjectExist,
          isFirstLogin: response.data.body.isFirstLogin,
          routerPaths: response.data.body.routerPaths
        }));
      }
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updateDataObj(obj) {
  return (dispatch) => {
    dispatch(setUserData(obj));
  };
}
