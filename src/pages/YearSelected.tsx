import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { tmdbApi } from '../api';
import { category } from '../api/tmdbApi';
import { CustomPagination, MovieListItem } from '../components';

function YearSelected() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/');
  const year = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    const fectch = async () => {
      const params = {
        year: year,
        page: page,
      };
      const response = await tmdbApi.discover(category.movie, { params });
      setContent(response.data.results);
      setTotalPages(response.data.total_pages);
    };
    fectch();
  }, [year, page]);
  return (
    <div className='search-list flex flex-col justify-center'>
      <span className='list-title mt-5 flex justify-center text-3xl font-bold'>{year}</span>
      <div className='list-wrapper'>
        <div className='list-container grid grid-cols-4 gap-4 justify-items-center'>
          {content.map((item, i) => (
            <MovieListItem
              key={i}
              item={item}
              category='movie'
            />
          ))}
        </div>
      </div>
      {totalPages && totalPages > 1 && (
        <CustomPagination
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default YearSelected;
