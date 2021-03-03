import { ONSWITCH } from '../types';

const initialState = {
  switcher: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONSWITCH:
      return {
        ...state,
        switcher: !state.switcher,
      };
    default:
      return state;
  }
};
