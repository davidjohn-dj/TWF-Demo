import axios from 'axios';
import { SET_USER_DATA } from '../types';

const baseURL = process.env.API_HOST;

export function setUserData(content) {
  return {
    type: SET_USER_DATA,
    content,
  };
}

export function getUserInfo(email) {
  const config = {
    headers: { email: email }
  };
  return (dispatch) => {
    return axios.get(baseURL + 'api/user/single-user', config).then((response) => {
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

export function updateUserInfo(obj, keycloak) {
  return (dispatch) => {
    dispatch(setUserData({
      emailId: obj.email,
      keycloak: keycloak
    }));
  };
}

// create user API
export function createUser(formData) {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return (dispatch) => {
    return axios.post(baseURL + 'api/admin/create-user', formData, config).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  };
}

// edit user API
export function editUser(formData) {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return (dispatch) => {
    return axios.post(baseURL + 'api/admin/edit-user', formData, config).then((response) => {
      dispatch(setUserData({

      }));
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  };
}

// fetch user API
export function fetchUsers() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/fetch-users').then((response) => {
      dispatch(setUserData({
        usersList: response.data.body
      }));
      return response.data.body;
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchAgencyList() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/agency/list').then((response) => {
      if (response.status = 200) {
        dispatch(setUserData({
          agencyArr: response.data.body
        }));
      }
      return response.data.body;
    }).catch((error) => {
      console.log(error);
    });
  }
}

export function updateUserStatus(id) {
  return (dispatch) => {
    return axios.put(baseURL + 'api/admin/update-status', { userId: id }).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchBrandList() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/brand/list').then((response) => {
      if (response.status = 200) {
        dispatch(setUserData({
          brandArr: response.data || []
        }));
      }
      return (response.data || []);
    }).catch((error) => {
      console.log(error);
    });
  }
}

export function fetchCountryCodeList() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/country/getAllCountryCode').then((response) => {
      dispatch(setUserData({
        countryArr: response.data
      }));
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
}

export function fetchCountryList() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/country/list').then((response) => {
      dispatch(setUserData({
        countryListArr: response.data
      }));
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
}

export function fetchLanguageList() {
  return (dispatch) => {
    return axios.get(baseURL + 'opapi/language/list').then((response) => {
      dispatch(setUserData({
        languageArr: response.data || []
      }));
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
}

export function updateDataObj(obj) {
  return (dispatch) => {
    dispatch(setUserData(obj));
  };
}
