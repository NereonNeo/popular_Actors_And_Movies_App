import {
  GETPOPULARACTORS,
  PLUSMOREACTORS,
  MOVIEINFO,
  TVINFO,
  SAVEPAGEFORACTORS,
  SAVEPAGEFORTVS,
  SAVEPAGEFORFILMS,
} from '../types';

const initialState = {
  topFilm: [],
  topTv: [],
  actors: [],
  savePage: [],
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
    case SAVEPAGEFORACTORS:
      return {
        ...state,
        savePage: state.actors.filter((x) => x.id === action.payload),
        // savePage: state.topTv.filter((x) => x.id === action.payload),
        // savePage: state.topFilm.filter((x) => x.id === action.payload),
      };
    case SAVEPAGEFORTVS:
      return {
        ...state,
        savePage: state.topTv.filter((x) => x.id === action.payload),
        // savePage: state.topFilm.filter((x) => x.id === action.payload),
      };
    case SAVEPAGEFORFILMS:
      return {
        ...state,
        savePage: state.topFilm.filter((x) => x.id === action.payload),
      };
    default:
      return state;
  }
};
