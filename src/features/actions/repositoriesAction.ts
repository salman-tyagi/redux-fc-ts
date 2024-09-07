import { Dispatch } from 'redux';
import axios from 'axios';

import { Action, ActionType } from '../reducers/repositoriesReducer';

export const searchRepositories = (query: string) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      dispatch({ type: ActionType.RepositoriesFetching });

      const { data } = await axios.get(
        `https://www.npmjs.com/search?q=${query}`
      );

      const result = data.objects.map((item: any) => item.package.name);

      dispatch({ type: ActionType.RepositoriesFetched, payload: result });
    } catch (err) {
      if(err instanceof Error) {
        dispatch({ type: ActionType.RepositoriesError, error: err.message });
      }
    }
  };
};
