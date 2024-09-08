import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import repositoriesReducer from './features/reducers/repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
