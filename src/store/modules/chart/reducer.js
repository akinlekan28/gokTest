import {GET_CHARTS, LOADING, REMOVE_LOADING} from './types';

const initialState = {
  chart: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHARTS:
      return {
        ...state,
        chart: action.payload,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
