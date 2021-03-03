import { GETPOPULARACTORS, PLUSMOREACTORS } from '../types';

export function getPopularActors() {
  return async (dispatch) => {
    try {
      await fetch(
        'https://api.themoviedb.org/3/person/popular?api_key=2bbb5d3e3e46103441594cbbedb59e3c&language=en-US&page=1'
      )
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: GETPOPULARACTORS, payload: data.results })
        );
    } catch (error) {
      console.log(error);
    }
  };
}
export function getPopularActorsMore() {
  return async (dispatch) => {
    try {
      await fetch(
        'https://api.themoviedb.org/3/person/popular?api_key=2bbb5d3e3e46103441594cbbedb59e3c&language=en-US&page=2'
      )
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: PLUSMOREACTORS, payload: data.results })
        );
    } catch (error) {
      console.log(error);
    }
  };
}
