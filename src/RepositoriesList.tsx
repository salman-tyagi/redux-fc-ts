import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from './features/actions/repositoriesAction';

const RepositoriesList: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const repositories = useSelector((state: any) => state.repositories.data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchRepositories(query) as any);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Search for Package</h4>
      <input
        value={query}
        type='text'
        placeholder='Enter package name'
        onChange={e => setQuery(e.target.value)}
      />
      <button>Search Package</button>

      <ol>
        {repositories.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </form>
  );
};

export default RepositoriesList;
