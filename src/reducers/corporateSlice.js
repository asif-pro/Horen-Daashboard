import { combineReducers } from 'redux';

const corporate = (
    state = {},
    action
  ) => {
    switch (action.type) {
    case 'ASSIGN_EMPLOYEE':
      const {employee} = action;
      return employee;
    default:
      return state;
    }
  };
  const reducers = combineReducers({
    corporate
  });
  export default reducers;