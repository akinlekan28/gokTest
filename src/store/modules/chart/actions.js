import {GET_CHARTS, LOADING, REMOVE_LOADING} from './types';
import axios from 'axios';
import {Platform} from 'react-native';
import {Notifier, NotifierComponents} from 'react-native-notifier';

export const getChartData = () => dispatch => {
  dispatch(loading());
  axios
    .get('https://api.deezer.com/chart/0/tracks')
    .then(res => dispatch({type: GET_CHARTS, payload: res.data.data}))
    .catch(err => {
      dispatch(removeLoading());
      return Notifier.showNotification({
        title: `${
          Platform.OS === 'android'
            ? '\nSomething went wrong!'
            : 'Something went wrong!'
        }`,
        description: 'Unable to connect to internet',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error',
        },
      });
    });
};

const loading = () => {
  return {type: LOADING};
};

const removeLoading = () => {
  return {type: REMOVE_LOADING};
};
