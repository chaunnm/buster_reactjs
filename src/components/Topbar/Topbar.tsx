import { IoNotifications } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Profile } from '.';
import { SearchItem } from '../Search';
import { useEffect, useState } from 'react';
import { ClickOutside } from '..';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Genre } from '../../interfaces';

function Topbar() {
  const fetchURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
    import.meta.env.VITE_MOVIES_API_KEY
  }&language=en-US`;
  const filterStyle =
    'flex items-center justify-between cursor-pointer border-2 border-main-color rounded py-2 pr-1.5 pl-3 my-0 mx-5';
  const selectedStyle =
    'flex flex-col flex-wrap bg-[#1e1e1e] absolute p-4 top-15 left-5 leading-7 max-h-[250px] rounded';
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(false);
  const [currGenres, setCurrGenres] = useState('All genres');
  const [yearSelected, setYearSelected] = useState(false);
  const [year, setYear] = useState('All time');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setGenres(response.data.genres);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className='top-bar z-30 bg-[#161616] fixed top-0 right-0 w-full h-24 flex justify-between items-center'>
      <div className='flex ml-2.5 font-medium'>
        <h1 className='logo text-main-color text-4xl font-["Bebas"]'>BUSTER</h1>
        <div className='relative'>
          <ClickOutside onClickOutside={() => setGenreSelected(false)}>
            <div
              className={`${filterStyle} + w-44`}
              onClick={() => setGenreSelected(!genreSelected)}
            >
              <span> {currGenres}</span>
              <RiArrowDropDownLine className='text-3xl' />
            </div>
            {genreSelected && (
              <div className={`${selectedStyle} + w-96`}>
                {Object.values(genres).map((genre: Genre) => (
                  <Link
                    to={{
                      pathname: `/genre/${genre.name}`,
                    }}
                    style={{ textDecoration: 'none', color: 'white' }}
                    key={genre.id}
                  >
                    <span
                      className='genre cursor-pointer max-w-[130px] hover:text-main-color'
                      onClick={() => {
                        setCurrGenres(genre.name);
                        setGenreSelected(false);
                        window.scroll(0, 0);
                      }}
                    >
                      {genre.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </ClickOutside>
        </div>
        <div className='relative'>
          <ClickOutside onClickOutside={() => setYearSelected(false)}>
            <div
              className={`${filterStyle} + w-36`}
              onClick={() => setYearSelected(!yearSelected)}
            >
              <span className='mr-7'>All Time</span>
              <RiArrowDropDownLine className='text-3xl' />
            </div>
            {yearSelected && (
              <div className={selectedStyle}>
                <span>All time</span>
                <input
                  type='number'
                  min='1990'
                  max='2024'
                  value={year}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      navigate(`/year_selected/${year}`);
                      setYearSelected(false);
                      window.scroll(0, 0);
                    }
                  }}
                  onChange={(e) => setYear(e.target.value)}
                  className='w-28 border border-[#707070] bg-transparent rounded text-white font-medium text-base p-3'
                />
              </div>
            )}
          </ClickOutside>
        </div>
      </div>
      <SearchItem />
      <div className='flex items-center ml-5'>
        <IoNotifications className='text-2xl' />
        <Profile />
      </div>
    </div>
  );
}

export default Topbar;
