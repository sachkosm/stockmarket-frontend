import {
  FETCH_STOCK, FETCH_STOCK_NOT_FOUND
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_STOCK:
      console.log(action.payload)
      return [action.payload.data, ...state];
      
    case FETCH_STOCK_NOT_FOUND:
      return [null, ...state];;
    default:
      return state;
  }
}
