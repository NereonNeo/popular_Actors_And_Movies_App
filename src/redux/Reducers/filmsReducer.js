import { GETPOPULARACTORS, PLUSMOREACTORS } from '../types';

const initialState = {
  film: [],
  actors: [],
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPOPULARACTORS:
      return {
        ...state,
        actors: state.actors.concat(action.payload),
        // actors: action.payload,
      };
    case PLUSMOREACTORS:
      return {
        ...state,
        actors: state.actors.concat(action.payload),
      };
    default:
      return state;
  }
};
