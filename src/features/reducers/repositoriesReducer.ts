interface RepositoriesState {
  isLoading: boolean;
  data: string[];
  error: string;
}

interface RepositoriesFetchingAction {
  type: 'repositoriesFetching';
}

interface RepositoriesFetchedAction {
  type: 'repositoriesFetched';
  payload: string[];
}

interface RepositoriesErrorAction {
  type: 'repositoriesError';
  error: string;
}

type Action =
  | RepositoriesFetchingAction
  | RepositoriesFetchedAction
  | RepositoriesErrorAction;

enum ActionType {
  RepositoriesFetching = 'repositoriesFetching',
  RepositoriesFetched = 'repositoriesFetched',
  RepositoriesError = 'repositoriesError'
}

const initialState: RepositoriesState = {
  isLoading: false,
  data: [],
  error: ''
};

const repositoriesReducer = (
  state = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.RepositoriesFetching:
      return { ...state, isLoading: true };

    case ActionType.RepositoriesFetched:
      return { ...state, isLoading: false, data: action.payload };

    case ActionType.RepositoriesError:
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
};

export default repositoriesReducer;
