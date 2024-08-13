import { createStore } from 'redux';
import rootReducer from '../rudux/Reducer';

const store = createStore(rootReducer);

export default store;

