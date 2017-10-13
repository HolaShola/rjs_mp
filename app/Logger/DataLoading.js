import data from '../components/data.json';

function DataLoading({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === 'LOAD_DATA') {
    //     fetch('https://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
    //       .then(response => response.json())
    //       .then((data) => {
    //         dispatch({ type: 'RECEIVE_DATA', payload: data });
    //       })
    //       .catch(error => console.log('error', error));
        loadData()
          .then(data => {
              dispatch({type: 'RECEIVE_DATA', payload: data})
          });
      }

      return next(action);
    }
  }
}

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 1000)
    });
}

export default DataLoading;
