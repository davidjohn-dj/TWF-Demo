import axios from 'axios';
import { SET_PM_ALLOCATION_DATA } from '../types';

const baseURL = process.env.API_HOST;

export function setPMAllocationData(content) {
  return {
    type: SET_PM_ALLOCATION_DATA,
    content,
  };
}

export function getUnclaimedProjects() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/pmgroup/unclaimed-projects').then((response) => {
      dispatch(setPMAllocationData({
        unClaimProjects: response.data.body ? response.data.body : []
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function getPMUserList(obj) {
  const config = {
    params: {
      regionId: obj.regionId,
      channelId: obj.channelId,
      countryId: obj.countryId,
      contentServiceType: obj.contentServiceTypeId,
      operModelId: obj.operationModelId,
      audienceTypeId: obj.audienceId
    }
  };

  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/pmgroup/pm-user-list', config).then((response) => {
      dispatch(setPMAllocationData({
        pmUserList: response.data.body ? response.data.body : []
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function assignProjectToPM(dataObj) {
  return (dispatch) => {
    return axios.post(baseURL + 'api/admin/pmgroup/assign-project-to-pm', dataObj).then((response) => {
      return response.data
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updateDataObj(obj) {
  return (dispatch) => {
    dispatch(setPMAllocationData(obj));
  };
}
