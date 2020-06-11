import { SET_USER_DATA } from '../types';

const INITIAL_STATE = {
  userId: 0,
  userName: '',
  userRole: '',
  preferredUserName: '',
  isProjectExist: false,
  isFirstLogin: false,
  emailId: '',
  keycloak: {},
  agencyArr: [],
  countryArr: [],
  usersList: [],
  showEditUserModal: false,
  editUserObj: {},
  sideMenuExpand: false,
  languageArr: [],
  routerPaths: []
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
