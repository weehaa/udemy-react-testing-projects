import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlwares = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlwares)(createStore);

export default createStoreWithMiddleware(rootReducer);