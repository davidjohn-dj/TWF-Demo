import {SET_PROJECT_REASSIGNMENT_DATA} from  '../types';
export default function(state=[],action)
{
  switch(action.type)
    {
      case SET_PROJECT_REASSIGNMENT_DATA:
      return [action.payload.data,...state];
    }
    return state;
}
