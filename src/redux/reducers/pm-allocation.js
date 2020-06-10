import { SET_PM_ALLOCATION_DATA } from '../types';

const INITIAL_STATE = {
  unClaimProjects: [],
  pmUserList: [],
  showPMAllocationModal: false
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_PM_ALLOCATION_DATA:
      return {
        ...state,
        ...action.content,
      };
    default:
      return state;
  }
};
