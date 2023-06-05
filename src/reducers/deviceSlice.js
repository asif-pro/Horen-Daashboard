import { combineReducers } from 'redux';

const device = (
    state = {},
    action
  ) => {
    switch (action.type) {
    case 'SELECT_DEVICE':
      const {device} = action;
      return device;
    default:
      return state;
    }
  };
  const reducers = combineReducers({

    device
  });
  export default reducers;