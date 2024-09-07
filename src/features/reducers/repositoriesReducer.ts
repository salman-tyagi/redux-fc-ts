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

const initialState: RepositoriesState = {
  isLoading: false,
  data: [],
  error: ''
};

const repositoriesReducer = (
  state = initialState,
  action:
    | RepositoriesFetchingAction
    | RepositoriesFetchedAction
    | RepositoriesErrorAction
): RepositoriesState => {
  switch (action.type) {
    case 'repositoriesFetching':
      return { ...state, isLoading: true };

    case 'repositoriesFetched':
      return { ...state, isLoading: false, data: action.payload };

    case 'repositoriesError':
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
};

export default repositoriesReducer;
