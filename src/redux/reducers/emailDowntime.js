import { SET_DOWNTIME_DATA } from '../types';

const INITIAL_STATE = {
  noticeNotificationTypes: [],
  downtimeEmailConfig: null
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
  case SET_DOWNTIME_DATA:
    return {
      ...state,
      ...action.content,
    };
  default:
    return state;
  }
};
