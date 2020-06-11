import { SET_TRANSLATOR_DATA } from '../types';

const INITIAL_STATE = {
  localeList: [],
  languageData: [],
  saveDataObj: { translated: true, allLanguages: true },
  addKeyModalVisible: false,
  editKeyModalVisible: false,
  editKeyObj: {},
  counter: 0
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_TRANSLATOR_DATA:
      return {
        ...state,
        ...action.content,
      };
    default:
      return state;
  }
};
