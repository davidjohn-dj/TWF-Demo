/* eslint-disable no-unused-vars, object-shorthand */

import axios from 'axios';
import { SET_INPUT_VALIDATOR_DATA } from '../types';
import store from "../store";

const baseURL = process.env.API_HOST;

export function setInputValidatorData(content) {
  return {
    type: SET_INPUT_VALIDATOR_DATA,
    content,
  };
}

//Master API for Input Validator Master Data
export function getChannelServiceTypeList() {
  const st = store.getState();
  const config = {
    headers: {
      'X-UserId': st.user.userId
    }
  }

  return (dispatch) => {
    //audienceId is 1 for HCP Content and Content type ID is 3 for 'CONTENT PRODUCTION'
    return axios.get(baseURL + 'api/aud-content-type-channel/list?audienceId=1&contentTypeId=3', config).then((response) => {
      let channelArr = [];
      response.data.map(item => {
        if (item.channelId !== 11)
          channelArr.push(item);
        return item;
      });
      dispatch(setInputValidatorData({
        channelArr: channelArr
      }));
    }).catch((error) => {
      console.log(error);
    });
  };
}

//Update Current Channel state for Input Validator
export function updateCurrentChannel(channelId, channelName) {
  return (dispatch) => {
    dispatch(setInputValidatorData({
      currentChannelId: channelId,
      currentChannelName: channelName
    }));

  };
}

//API for Input Validator Rule List
export function getRuleList(channelId) {

  return (dispatch) => {
    return axios.get(baseURL + 'api/iv/rule-list?channelId=' + channelId + '&contentServiceTypeId=3').then((response) => {
      dispatch(setInputValidatorData({
        requestTypeList: response.data.body.requestTypeList,
        ruleList: response.data.body.ruleList
      }));
      return response.data.body;
    }).catch((error) => {
      console.log(error);
    });
  };
}

// Update Rule Configuration API
export function updateRuleConfiguration(formData) {

  return (dispatch) => {
    return axios.put(baseURL + 'api/iv/update-rule-config', formData).then((response) => {
      if (response.status === 200) {
        return true
      } else {
        return false
      }
    }).catch((error) => {
      console.log(error);
      return false;
    });
  };
}
