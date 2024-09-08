import useActions from './features/hooks/useActions';

const RepositoriesList: React.FC = (): JSX.Element => {
  const { isLoading, data, error, handleSubmit, query, setQuery, inputRef } =
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

      {isLoading && <div>Searching...</div>}

      {error && <div>{error}</div>}

      {!isLoading &&
        !error &&
        data.map((item: string, i: number) => (
          <div key={i}>
            {i + 1}. {item}
          </div>
        ))}
    </form>
  );
};

export default RepositoriesList;
