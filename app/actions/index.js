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

// export const getFilms = () => {
//   return dispatch => {
//     dispatch(moviesRequest(true))
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(data)
//         dispatch(moviesRequest(false))
//       }, 1000)
//     })
//       .then(data => {
//         dispatch(moviesReceive(data))
//       });
//   }
// }

export const getFilms = (searchValue) => {
  // Jack+Reacher
  console.log(searchValue);
  return dispatch => {
    dispatch(moviesRequest(true))
   // fetch("https://api.themoviedb.org/3/movie/76341?api_key=4f7821834291015d1ed75fbd1dab475b")
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f7821834291015d1ed75fbd1dab475b&query=${searchValue.replace(" ", "+")}`)
      .then(response => {
        dispatch(moviesRequest(false))
        return response.json()
      })
      .then(data => {
        dispatch(moviesReceive(data.results))
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