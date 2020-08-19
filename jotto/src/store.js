import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlwares = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlwares)(createStore);


//for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middlwares)
));

export default createStoreWithMiddleware(rootReducer);