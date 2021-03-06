import { GETPOPULARACTORS, PLUSMOREACTORS, MOVIEINFO, TVINFO } from '../types';

const initialState = {
  topFilm: [],
  topTv: [],
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
    case MOVIEINFO:
      return {
        ...state,
        topFilm: state.topFilm.concat(action.payload),
      };
    case TVINFO:
      return {
        ...state,
        topTv: state.topTv.concat(action.payload),
      };
    default:
      return state;
  }
};
