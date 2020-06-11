import { SET_PM_DATA } from '../types';

const INITIAL_STATE = {
  channelList: [],
  regionList: [],
  countryList: [],
  pmList: [],
  activePmList: [],
  pmDetails: [],
  audienceTypeList: [],
  contentServiceTypeList: [],
  operatingModelList: [],
  channelList: [],
  pmGroupUsersList: [],
  viewPMListModal: false,
  showEditPMGroupModal: false,
  pmGroupId: '',
  pmsForGroup: null
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_PM_DATA:
      return {
        ...state,
        ...action.content,
      };
    default:
      return state;
  }
};
