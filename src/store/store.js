import reducers from '../reducers/deviceSlice';
import { createStore } from 'redux';
export let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());