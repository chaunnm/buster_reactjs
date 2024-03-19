/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoSearchSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { ClickOutside } from '..';
import { ResultCards } from '.';
import { ResultCardItem } from './ResultCards';
import { useNavigate } from 'react-router-dom';

function SearchItem() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<[] | false>();
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`/movies/search/${query}`);
    setResults(false);
  };

  useEffect(() => {
    const path = `
    https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_MOVIES_API_KEY
    }&language=en-US&query=${query}&page=1&include_adult=false`;

    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, [query]);

  return (
    <ClickOutside onClickOutside={() => setResults(false)}>
      <form className='flex h-11 rounded overflow-hidden'>
        <input
          type='text'
          placeholder='Search Movies, TV series,...'
          className='w-96 bg-[#303030] border-0 p-4 text-[#9fb3c8] font-medium outline-none'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className='cursor-pointer h-full w-11 flex justify-center items-center bg-main-color leading-3'>
          <IoSearchSharp
            className='text-2xl'
            onClick={handleSearch}
          />
        </div>
      </form>
      {results && (
        <ul className='results w-96 flex flex-col flex-nowrap bg-[#1e1e1e] absolute mt-5 top-15 leading-relaxed max-h-[500px] rounded overflow-x-hidden overflow-y-scroll cursor-pointer'>
          {results.map((movie: ResultCardItem) => (
            <li
              key={movie.id}
              onClick={() => setResults(false)}
            >
              <ResultCards item={movie} />
            </li>
          ))}
        </ul>
      )}
      {/* {!results && <div className='text-center text-xl top-20'>No result found</div>} */}
    </ClickOutside>
  );
}

export default SearchItem;
