import { Dispatch } from 'redux';
import axios from 'axios';

import { Action, ActionType } from '../reducers/repositoriesReducer';

export const searchRepositories = (query: string) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      dispatch({ type: ActionType.RepositoriesFetching });

      /* Not working 'cors option error' 
      const { data } = await axios.get(
        `https://www.npmjs.com/search?q=${query},`,
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      );
      */

      const { data } = await axios.get(
        `https://api.npms.io/v2/search?q=${query},`
      );

      const result = data.results.map((item: any) => item.package.name);

      dispatch({ type: ActionType.RepositoriesFetched, payload: result });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: ActionType.RepositoriesError, error: err.message });
      }
    }
  };
};
