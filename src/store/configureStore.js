import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/Rockets';
import missionsReducer from './missions/Missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
