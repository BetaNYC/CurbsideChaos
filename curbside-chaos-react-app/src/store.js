import { createStore, combineReducers, applyMiddleware } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';

const initialState = {};
const reducers = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer,

  // Your other reducers here
  // app: appReducer
});

// using createStore
export default createStore(
  reducers,
  initialState,
  applyMiddleware(
    enhanceReduxMiddleware([])
  )
);