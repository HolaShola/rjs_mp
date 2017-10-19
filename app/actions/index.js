import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_RECEIVE
} from '../constants';
import data from '../components/data.json';

export const moviesRequest = (bool) => (
  {
    type: FETCH_MOVIES_REQUEST,
    payload: bool,
  }
)

export const moviesReceive = (data) => (
  {
    type: FETCH_MOVIES_RECEIVE,
    payload: data,
  }
)

export const moviesFetchFailure = (bool) => (
  {
    type: FETCH_MOVIES_FAILURE,
    payload: bool,
  }
)

export const getFilms = () => {
  return dispatch => {
    dispatch(moviesRequest(true))
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
        dispatch(moviesRequest(false))
      }, 1000)
    })
      .then(data => {
        dispatch(moviesReceive(data))
      });
  }
}

// function DataLoading({ dispatch }) {
//   return function (next) {
//     return function (action) {
//       if (action.type === 'LOAD_DATA') {
//     //     fetch('https://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
//     //       .then(response => response.json())
//     //       .then((data) => {
//     //         dispatch({ type: 'RECEIVE_DATA', payload: data });
//     //       })
//     //       .catch(error => console.log('error', error));
//         loadData()
//           .then(data => {
//               dispatch({type: 'RECEIVE_DATA', payload: data})
//           });
//       }

//       return next(action);
//     }
//   }
// }

// function loadData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(data), 1000)
//     });
// }