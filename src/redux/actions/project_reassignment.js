import axios from 'axios';
import { SET_PROJECT_REASSIGN_DATA, SET_PROJECT_REASSIGNMENT_DATA } from '../types';

const baseURL = process.env.API_HOST;

export function setUserData(content) {
  return {
    type: SET_PROJECT_REASSIGN_DATA,
    content,
  };
}

export function fetchProjectsForReassign() {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/fetch-project-reassign').then((response) => {
      dispatch(setUserData({
        reassignUsersList: response.data.body ? response.data.body.userList : [],
        milestoneStatus: response.data.body ? response.data.body.milestoneStatus : [],
        projectId: response.data.body ? response.data.body.projectId : [],
        roles: response.data.body ? response.data.body.roles : [],
        reassignProjectsList: response.data.body ? response.data.body.projectsList : [],
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function getUsersByRole(projectObj) {
  return (dispatch) => {
    return axios.get(baseURL + 'api/admin/fetch-role-users?role=' + projectObj.userRole + '&projectId=' + projectObj.projectId).then((response) => {
      dispatch(setUserData({
        userLists: response.data.body ? response.data.body : []
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function reassignProjectToUser(obj, userId) {
  const config = {
    headers: { 'X-UserId': userId }
  }
  return (dispatch) => {
    return axios.post(baseURL + 'api/admin/reassign-project', obj, config).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchProjects() {
  const req = axios.get(baseURL + 'api/admin/fetch-project-reassign');
  return {
    type: SET_PROJECT_REASSIGNMENT_DATA,
    payload: req
  };
}

export function updateDataObj(obj) {
  return (dispatch) => {
    dispatch(setUserData(obj));
  };
}
