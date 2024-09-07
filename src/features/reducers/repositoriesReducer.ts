interface RepositoriesState {
  isLoading: boolean;
  data: string[];
  error: string;
}

const initialState: RepositoriesState = {
  isLoading: false,
  data: [],
  error: ''
};

const repositoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'repositoriesFetchRepositories':
      return { ...state, isLoading: true };

    case 'repositoriesFetchedRepositories':
      return { ...state, isLoading: false, data: action.payload };

    case 'repositoriesError':
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
};

export default repositoriesReducer;
