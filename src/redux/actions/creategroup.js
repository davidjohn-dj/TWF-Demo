/* eslint-disable no-unused-vars, object-shorthand */

import axios from 'axios';
import { SET_PM_DATA } from '../types';

const baseURL = process.env.API_HOST

export function setPmData(content) {
  return {
    type: SET_PM_DATA,
    content,
  };
}

// API for Attributes
export function getAttributeData() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/master-data').then((response) => {
      dispatch(setPmData({
        countryList: response.data.body.country ? response.data.body.country : [],
        regionList: response.data.body.region ? response.data.body.region : [],
        operatingModelList: response.data.body.operatingModels ? response.data.body.operatingModels : [],
        audienceTypeList: response.data.body.audiences ? response.data.body.audiences : [],
        contentServiceTypeList: response.data.body.ContentTypeService ? response.data.body.ContentTypeService : [],
        channelList: response.data.body.channels ? response.data.body.channels : []
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

//API for Audience Type Content List
export function getAudienceTypeContentList(id) {
  return (dispatch) => {
    return axios.get(baseURL + 'api/aud-content-type/list?audienceId=' + id).then((response) => {
      dispatch(setPmData({
        contentServiceTypeList: response.data
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

//API for Content Type Channel List
export function getContentTypeChannelList(audId, contId, userid) {
  const config = {
    headers: {
      'X-UserId': userid
    }
  }
  return (dispatch) => {
    return axios.get(baseURL + 'api/aud-content-type-channel/list?audienceId=' + audId + '&contentTypeId=' + contId, config).then((response) => {
      dispatch(setPmData({
        channelList: response.data
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

// API for PM List
export function getPmList() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/pmgroup/pm-users').then((response) => {
      dispatch(setPmData({
        pmList: response.data.body
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

// API for Active PM List
export function getActivePmList() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/pmgroup/all-active-groups').then((response) => {
      dispatch(setPmData({
        activePmList: response.data.body ? response.data.body : []
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

// API for get PM Group Users
export function getPMGroupUsers(id) {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/pmgroup/pm-group-users?groupId=' + id).then((response) => {
      dispatch(setPmData({
        pmGroupUsersList: response.data.body ? response.data.body.groupUsers : []
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

// API for get PM Group Users
export function getPMForGroup(id) {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/pmgroup/view-group?groupId=' + id).then((response) => {
      dispatch(setPmData({
        pmsForGroup: response.data.body ? response.data.body : null
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

// create new group API
export function createNewGroup(userid, formData) {
  const config = {
    headers: {
      'X-UserId': userid
    }
  }
  return (dispatch) => {
    return axios.post(baseURL + 'api/admin/pmgroup/create-group', formData, config).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  };
}

// update group API
export function updateGroup(userid, formData) {
  const config = {
    headers: {
      'X-UserId': userid
    }
  }
  return (dispatch) => {
    return axios.post(baseURL + 'api/admin/pmgroup/update-group', formData, config).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  };
}

// delete group API
export function deleteGroup(userid, formData) {
  const config = {
    headers: {
      'X-UserId': userid
    }
  }
  return (dispatch) => {
    return axios.post(baseURL + 'api/admin/pmgroup/deactive-groups', formData, config).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updateDataObj(obj) {
  return (dispatch) => {
    dispatch(setPmData(obj));
  };
}
