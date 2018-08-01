import Axios from 'axios';
import { FETCH_STOCK, FETCH_MYSTOCK, FETCH_STOCK_NOT_FOUND } from './types';
import config from '../config.js'

// export function fetchStock(company) {
//   const url = `https://api.iextrading.com/1.0/stock/${company}/batch?types=company,chart&range=1m&last=1`;
//   const request = Axios.get(url);
//   return {
//     type: FETCH_STOCK,
//     payload: request
//   }
// };

// export function fetchMyStock() {
//   const url = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla,msft,amd,aft&types=company,chart&range=1m&last=1';
//   const request = Axios.get(url);
//   return {
//     type: FETCH_MYSTOCK,
//     payload: request
//   }
// };


export const fetchMyStock = () => {
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${config.myStocks}&types=company,chart&range=1m&last=1`;
  return dispatch => {
    // dispatch({
    //   type: FETCH_DATA_REQUESTED
    // })
    return Axios.get(url).then(data => {
      //console.log(data.data)
      dispatch({
        type: FETCH_MYSTOCK,
        payload: data
      });
    }).catch(error => {
      dispatch({
        type: FETCH_STOCK_NOT_FOUND,
        payload: null
      });
    });
  }
}

export const fetchStock = (company) => {
  const url = `https://api.iextrading.com/1.0/stock/${company}/batch?types=company,chart&range=1m&last=1`;
  return dispatch => {
    // dispatch({
    //   type: FETCH_DATA_REQUESTED
    // })
    return Axios.get(url).then(data => {
      //console.log(data.data)
      dispatch({
        type: FETCH_STOCK,
        payload: data
      });
    }).catch(error => {
      dispatch({
        type: FETCH_STOCK_NOT_FOUND,
        payload: null
      });
    });
  }
}