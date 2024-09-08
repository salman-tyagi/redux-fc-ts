import useActions from './features/hooks/useActions';

const RepositoriesList: React.FC = (): JSX.Element => {
  const { repositories, handleSubmit, query, setQuery, inputRef } =
    useActions();

  return (
    <form onSubmit={handleSubmit}>
      <h4>Search for Package</h4>
      <input
        ref={inputRef}
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
