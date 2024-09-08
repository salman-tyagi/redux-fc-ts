import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from '../actions/repositoriesAction';

const useActions = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const repositories = useSelector((state: any) => state.repositories.data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchRepositories(query) as any);
    setQuery('');
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);

  return { repositories, handleSubmit, query, setQuery, inputRef };
};

export default useActions;
