import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRepositories } from '../actions/repositoriesAction';
import { useAppSelector } from './useAppSelector';

const useActions = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { isLoading, data, error } = useAppSelector(
    state => state.repositories
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchRepositories(query) as any);
    setQuery('');
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);

  return { isLoading, data, error, handleSubmit, query, setQuery, inputRef };
};

export default useActions;
